import React from "react";
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  ScrollView
} from "react-native";

class Main extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Most Selling Products</Text>

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.productContainer}>
              <Image
                source={require("../assets/Products/Images/32740307068_01.jpg")}
                style={styles.productImage}
              />
              <View style={styles.productTextContainer}>
                <Text style={styles.productHeader}>Sandisk 64gb SdCard</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>12.00</Text>
                <Text style={styles.price}>10.00</Text>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImage}
              />
              <View style={styles.productTextContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>35.00</Text>
                <Text style={styles.price}>23.00</Text>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                source={require("../assets/Products/Images/32903877682_01.jpg")}
                style={styles.productImage}
              />
              <View style={styles.productTextContainer} />
              <Text style={styles.productHeader}>
                Samsung Screen Protection
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>8.99</Text>
                <Text style={styles.price}>10.00</Text>
              </View>
            </View>
            <View style={styles.productContainer}>
              <View style={styles.productImage}>
                <Image
                  source={require("../assets/Products/Images/32924478819_01.jpg")}
                  style={styles.productImage}
                />
                <View style={styles.productTextContainer}>
                  <Text style={styles.productHeader}>Man Bag</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.oldPrice}>25.00</Text>
                  <Text style={styles.price}>18.50</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                source={require("../assets/Products/Images/32947594040_01.jpg")}
                style={styles.productImage}
              />
              <View style={styles.productTextContainer}>
                <Text style={styles.productHeader}>Utilities</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>19.00</Text>
                <Text style={styles.price}>14.25</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2
  },
  productContainer: {
    marginBottom: 10,
    marginLeft: 2,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#FF99CC"
  },
  productImage: {
    justifyContent: "space-between",
    marginBottom: 10,
    width: 198,
    height: 198
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
