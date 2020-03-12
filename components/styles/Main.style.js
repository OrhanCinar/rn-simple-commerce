import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2,
    marginTop: 0
  },
  bannerContainer: {
    margin: 5
  },
  bannerImage: {
    //flex: 1,
    width: 350,
    height: 150,
    margin: 5,
    flexDirection: "row",
    alignSelf: "stretch",
    textAlign: "center",
    alignContent: "center"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    //marginTop: 50
  },
  headerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBoxContainer: {
    flexDirection: "column",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#80cef2"
  },
  searchBox: {
    borderWidth: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#5ecbf2",
    textAlign: "center",
    color: "#000",
    margin: 15,
    fontSize: 20,
    height: 40
  },
  categoryBar: {
    flexDirection: "row",
    alignSelf: "stretch",
    textAlign: "center",
    alignContent: "center",
    marginTop: 10,
    marginBottom: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#71cbf5",
    borderTopWidth: 1,
    borderTopColor: "#80cef2"
  }
});
