import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  image: { width: 50, height: 50 },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  day: { fontSize: 20 },
  date: { fontSize: 20 },
  temperature: {
    borderRadius: 10,
    padding: 5,
    fontSize: 20,
    minWidth: 50,
    textAlign: "right",
  },
});

export { s };
export default s;
