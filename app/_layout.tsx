import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Bayer Dithering",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="text-os"
        options={{
          title: "Bayer Dithering",
        }}
      /> */}
    </Stack>
  );
}
