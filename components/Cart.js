import React from "react";
import { View, Text, TextInput, Image, Button, ScrollView } from "react-native";

import styles from "./styles/Cart.style";

class Cart extends React.Component {
  state = {};
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image
              id="32740307068"
              accessibilityLabel="product Image"
              source={require("../assets/Products/Images/32740307068_01.jpg")}
              style={styles.productItem}
            />
            <View>
              <Text style={styles.productHeader}>Sandisk 64gb SdCard</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.oldPrice}>12.00</Text>
              <Text style={styles.price}>10.00</Text>
            </View>
            <Text>5</Text>
            <Text>50.00</Text>
            <Button>REMOVE ITEM</Button>
          </View>
        </ScrollView>

        <View>
          <Text>TOTAL : 50.00</Text>
          <Text>DISCOUNT : 0.00</Text>
          <Text>SUB TOTAL : 50.00</Text>
        </View>
      </View>
    );
  }
}

export default Cart;
