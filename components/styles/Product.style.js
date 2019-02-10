import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 40,
    //marginLeft: 5,
    //marginRight: 5,
    justifyContent: "space-between"
  },
  productItem: {
    //marginBottom: 10,
    width: 200,
    height: 200
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 8,
    // borderWidth: 0.9,
    borderColor: "#202020",
    marginBottom: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 1
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 1
  },
  productHeader: {
    fontSize: 30,
    //fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  btnAdd: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#841584",
    height: 36,
    marginBottom: 5
  },
  priceContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 1
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green"
  },
  oldPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  },
  description: {
    textAlign: "justify",
    color: "#190033",
    fontSize: 18
  }
}));
