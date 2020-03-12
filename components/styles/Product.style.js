import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4"
    // marginTop: 50
  },

  //header
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 1
  },
  productHeader: {
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6
  },

  //Image
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 8,
    // borderWidth: 0.9,
    borderColor: "#202020",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },

  productImage: {
    //marginBottom: 10,
    width: 200,
    height: 200,
    marginBottom: 5,
    marginTop: 5
  },

  //PRICE
  priceContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 1,
    flexShrink: 1
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    flex: 0,
    margin: 2
  },
  oldPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  },
  description: {
    textAlign: "justify",
    color: "#190033",
    fontSize: 16
  },

  //quantity
  quantityContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",

    marginBottom: 1,
    flexShrink: 1
  },

  //button
  buttonContainer: {
    height: 60,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#841584"
  },
  buttonText: {
    color: "#fff",
    fontSize: 22
  }
});
