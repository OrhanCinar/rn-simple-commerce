import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";

class Cart extends Component {
  state = {};
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image accessibilityLabel="PRODUCT IMAGE" />
            <Text>PRODUCT NAME</Text>
            <Text>PRODUCT Price</Text>
            <Text>PRODUCT Quantity</Text>
            <Text>PRODUCT Total</Text>
            <Button>REMOVE ITEM</Button>
          </View>
        </ScrollView>

        <View>
          <Text>TOTAL</Text>
          <Text>DISCOUNT</Text>
          <Text>SUB TOTAL</Text>
        </View>
      </View>
    );
  }
}

export default Cart;
