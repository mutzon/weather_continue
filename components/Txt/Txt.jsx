import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";
export function Txt({ children, style, ...restProps }) {
  const ANDROID_MEDIUM_SIZE = 0.001123234916559692;
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  console.log("height", 1 / height);
  console.log(fontSize * 0.001123234916559692 * height);

  return (
    <Text
      style={[
        s.txt,
        style,
        { fontSize: Math.round(fontSize * ANDROID_MEDIUM_SIZE * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
