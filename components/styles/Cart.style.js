import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //    flexWrap: "wrap",
    flexDirection: "column",
    //marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    marginRight: 5
    //justifyContent: "space-between"
  },
  productContainer: {
    flex: 1,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    width: "100%"
  },
  totalsContainer: {
    flex: 1,
    borderWidth: 0.9,
    borderColor: "#202020",
    height: 50,
    textAlign: "right",
    width: "100%"
    // alignSelf: "flex-end"
  },
  productItem: {
    //marginBottom: 10,
    width: 100,
    height: 100,
    borderWidth: 0.9,
    borderColor: "#202020"
  },
  productInfoContainer: {
    borderWidth: 0.9,
    borderColor: "#202020",
    alignSelf: "stretch",
    width: "73%"
  },
  productPriceTotals: {
    textAlign: "left",
    color: "black"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#202020",
    marginBottom: 5
  },
  productHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10
  },

  priceContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    textAlign: "right",
    alignSelf: "flex-end"
  },
  oldPrice: {
    fontSize: 10,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  }
}));
