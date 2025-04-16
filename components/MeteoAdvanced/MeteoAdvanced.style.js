import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
});

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}
export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
export { s };
