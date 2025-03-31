import { useAtoms } from "@/utils/use-atoms";
import {
    Canvas,
    Circle,
    Fill,
    Group,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, View } from "react-native";
import {
    type SharedValue,
    useDerivedValue,
    useFrameCallback,
    useSharedValue,
} from "react-native-reanimated";

const { width: W, height: H } = Dimensions.get("window");
const PARTICLE_COUNT = 8;
const GRID_SIZE = 20;
const DEBUG = false;

interface Particle {
    id: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    m: number;
}

const createParticles = (): Particle[] => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, index) => ({
        id: index,
        x: Math.random(),
        y: Math.random(),
        dx: (Math.random() - 0.5) * 0.035,
        dy: (Math.random() - 0.5) * 0.035,
        m: Math.random() * 0.025,
    }));
};

const defaultParticles: Particle[] = createParticles();

interface ParticleProps {
    x: number;
    y: number;
    particles: SharedValue<Particle[]>;
}

const Particle = ({ x, y, particles }: ParticleProps) => {
    const r = useDerivedValue(() => {
        let n = 0;
        for (const p of particles.value) {
            const _x = x - p.x * W;
            const _y = y - p.y * H;
            const d = Math.sqrt(_x * _x + _y * _y) / Math.hypot(H, W);
            n += d ? Math.min(p.m / (d * d * GRID_SIZE), 2) : 2;
        }
        return Math.min(n, 9) * GRID_SIZE * 0.5;
    });

    const color = useDerivedValue(() => {
        return `hsl(${(x / W) * 360}, 85%, 60%)`;
    });

    return <Circle cx={x} cy={y} r={r} color={color} />;
};

const PulsatingGrid = () => {
    const a = useAtoms();
    const particles = useSharedValue<Particle[]>(defaultParticles);

    useFrameCallback(() => {
        particles.value = particles.value.map((p) => {
            const newX = p.x + p.dx;
            const newY = p.y + p.dy;
            if (newX > 1 || newX < 0) p.dx = -p.dx;
            if (newY > 1 || newY < 0) p.dy = -p.dy;
            return { ...p, x: newX, y: newY };
        });
    });

    return (
        <View style={[a.flex1]}>
            <Canvas style={{ width: W, height: H }}>
                <Fill color="hsl(0, 0%, 10%)" />
                <Group blendMode="plus">
                    {Array.from({ length: Math.ceil(W / GRID_SIZE) }).map((_, i) =>
                        Array.from({ length: Math.ceil(H / GRID_SIZE) }).map((_, j) => {
                            const x = i * GRID_SIZE;
                            const y = j * GRID_SIZE;
                            return (
                                <Particle
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={`${i}-${j}`}
                                    x={x}
                                    y={y}
                                    particles={particles}
                                />
                            );
                        }),
                    )}
                </Group>

                {DEBUG
                    ? particles.value.map((particle) => {
                            const x = particle.x * W;
                            const y = particle.y * H;
                            return (
                                <Circle
                                    key={particle.id}
                                    cx={x}
                                    cy={y}
                                    r={3 * GRID_SIZE * 0.5}
                                    color={"#ff0000"}
                                />
                            );
                        })
                    : null}
            </Canvas>
        </View>
    );
};

export default PulsatingGrid;
