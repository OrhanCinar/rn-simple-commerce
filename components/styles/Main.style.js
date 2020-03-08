import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2,
    marginTop: 50
  },
  productContainer: {
    marginBottom: 10,
    marginLeft: 2,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#00BCD4"
  },
  productImage: {
    //justifyContent: "space-between",
    marginBottom: 10,
    // padding: 2,
    width: 196,
    height: 196
  },
  productTextContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  productHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#808080"
  },
  //PRICE
  priceContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green"
  },
  oldPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  },

  //HEADER
  headerContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FF007F",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
