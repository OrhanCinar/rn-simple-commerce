import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryContainer: {
    marginBottom: 10,
    marginLeft: 2,
    // marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#00BCD4",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1
  }
}));
