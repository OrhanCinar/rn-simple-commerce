import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    //    flexWrap: "wrap",
    flexDirection: "column",
    //marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: "space-between"
  },
  scrollContainer: {
    flex: 2,
    flexGrow: 1,
    borderBottomColor: "#b0f709",
    borderBottomWidth: 1
  },
  productContainer: {
    flex: 1,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    //alignSelf: "stretch",
    //width: "100%",
    borderWidth: 0.9,
    borderColor: "#202020"
  },

  productImageContainer: {
    //marginBottom: 10,
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 0.9,
    borderColor: "#fc3f4b"
  },

  //Product Info
  productInfoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  productHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  //Price Container
  priceContainer: {
    flex: 1,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  priceRow: {
    flexDirection: "row"
  },
  priceLabel: {
    //alignSelf: "flex-start",
    textAlign: "left",
    width: 85
  },
  price: {
    flex: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "#025150",
    textAlign: "right",
    marginRight: 5
    //alignSelf: "flex-end"
  },
  oldPrice: {
    fontSize: 10,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  },

  //Totals

  totalsContainer: {
    flex: 0,
    bottom: 0,
    borderWidth: 0.9,
    borderColor: "#202020",
    //height: 10,
    //textAlign: "right",
    //justifyContent: "flex-end",
    marginLeft: 5,
    marginTop: 10
    //flexShrink: 1
    // width: "100%"
    // alignSelf: "flex-end"
  },
  totalRow: { flexDirection: "row", borderWidth: 0.9, borderColor: "#035382" },
  productPriceTotals: {
    textAlign: "left",
    color: "black"
  }
}));
