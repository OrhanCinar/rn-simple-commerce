import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between"
  },
  categoryContainer: {
    marginBottom: 10,
    marginLeft: 2,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#00BCD4"
  },

  productItem: {
    //marginBottom: 10,
    width: 200,
    height: 200
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
    fontSize: 30,
    fontWeight: "bold"
  },

  priceContainer: {
    alignItems: "center",
    justifyContent: "center"
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
  }
}));
