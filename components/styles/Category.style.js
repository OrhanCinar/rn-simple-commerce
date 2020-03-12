import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#E0F7FA",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryContainer: {
    marginBottom: 5,
    marginLeft: 5,
    // marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#00BCD4",
    width: 190,
    height: 180,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#808080"
  }
});
