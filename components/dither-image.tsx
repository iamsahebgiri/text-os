import { Dimensions, View } from "react-native";
import React from "react";
import {
	Canvas,
	Fill,
	ImageShader,
	Shader,
	Skia,
	useImage,
} from "@shopify/react-native-skia";
import { useAtoms } from "@/utils/use-atoms";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const source = Skia.RuntimeEffect.Make(`
    uniform shader image;
    
    const mat4 bayerMatrix = mat4(
        00.0/16.0, 12.0/16.0, 03.0/16.0, 15.0/16.0,
        08.0/16.0, 04.0/16.0, 11.0/16.0, 07.0/16.0,
        02.0/16.0, 14.0/16.0, 01.0/16.0, 13.0/16.0,
        10.0/16.0, 06.0/16.0, 09.0/16.0, 05.0/16.0
    );

    // photoshop luminosity method
    const float3 grayscaleCoefficients = float3(0.299, 0.587, 0.114);

    float getBayerValue(int i, int j) {
    
        float result = 0.0;
        
        for (int x = 0; x < 4; x++) {
            for (int y = 0; y < 4; y++) {
                if (i == x && j == y) {
                    result = bayerMatrix[x][y];
                }
            }
        }
        return result;
    }

    half4 main(float2 fragCoord) {
        half4 originalColor = image.eval(fragCoord);
        
        // gamma correction
        originalColor.rgb = pow(originalColor.rgb, float3(2.2)) - 0.004;
        
        // grayscale
        float luminance = dot(originalColor.rgb, grayscaleCoefficients);
        float3 grayscaleColor = float3(luminance);
        originalColor.rgb = mix(originalColor.rgb, grayscaleColor, 1);
        
        int size = 4;
        int i = int(mod(fragCoord.x, float(size)));
        int j = int(mod(fragCoord.y, float(size)));
        float bayerValue = getBayerValue(i, j);
        
        
        float4 effect = float4(
            step(bayerValue, originalColor.r),
            step(bayerValue, originalColor.g),
            step(bayerValue, originalColor.b),
            originalColor.a
        );
        
        return mix(originalColor, effect, 1);
    }
    
    `)!;

const { width: DEVICE_WIDTH } = Dimensions.get("screen");
const PADDING = 16 * 2;
const IMAGE_WIDTH = DEVICE_WIDTH - PADDING;
const scale = 1.5;

interface DitherImageProps {
	src: string;
}

const DitherImage = ({ src }: DitherImageProps) => {
	const a = useAtoms();
	const image = useImage(src);

	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const aspectRatio = image?.width()! / image?.height()!;
	const width = IMAGE_WIDTH;
	const height = width / aspectRatio / scale;
	return (
		<View>
			<Canvas style={[{ width, height }, a.rounded16, a.overflowHidden]}>
				<Fill>
					<Shader source={source}>
						<ImageShader
							image={image}
							x={0}
							y={0}
							width={width}
							height={height}
							fit="cover"
						/>
					</Shader>
				</Fill>
			</Canvas>
		</View>
	);
};

export default DitherImage;
