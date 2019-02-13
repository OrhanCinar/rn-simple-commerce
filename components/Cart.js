import React from "react";
import { View, Text, TextInput, Image, Button, ScrollView } from "react-native";

import styles from "./styles/Cart.style";

class Cart extends React.Component {
  state = {};
  static navigationOptions = {
    title: "Cart"
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32740307068_01.jpg")}
                style={styles.productItem}
              />
              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Sandisk 64gb SdCard</Text>

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>Price : 10.00</Text>
                  <Text style={styles.price}>Quantity : 5</Text>
                  <Text style={styles.price}>Total : 50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productItem}
              />
              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>Price : 10.00</Text>
                  <Text style={styles.price}>Quantity : 5</Text>
                  <Text style={styles.price}>Total : 50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productItem}
              />
              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>Price : 10.00</Text>
                  <Text style={styles.price}>Quantity : 5</Text>
                  <Text style={styles.price}>Total : 50.00</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.totalsContainer}>
          <Text>TOTAL : 50.00</Text>
          <Text>DISCOUNT : 0.00</Text>
          <Text>SUB TOTAL : 50.00</Text>
        </View>
      </View>
    );
  }
}

export default Cart;
