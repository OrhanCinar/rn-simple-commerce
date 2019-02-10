import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "column",
    // marginTop: 40,
    //marginLeft: 5,
    //marginRight: 5,
    justifyContent: "space-between"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    height: 60,
    marginTop: 40,
    width: 240,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    fontSize: 24
  }
}));
