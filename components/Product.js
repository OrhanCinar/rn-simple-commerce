import React from "react";
import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";

class Product extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image accessibilityLabel="product Image" />
        <Text>PRODUCT_NAME</Text>
        <Text>OLD_PRICE</Text>
        <Text>PRICE</Text>
        {/* ADD SPINNER FOR QUANTITY */}
        <Image accessibilityLabel="favorite" />
        <Text>DESCRIPTION</Text>
        <Button>ADD TO CART</Button>
      </View>
    );
  }
}

export default Product;
