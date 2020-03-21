import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, ScrollView } from "react-native";

import styles from "./styles/Cart.style";

import { scConfig } from "../config";

function Cart() {
  const [products, setProducts] = useState([]);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    fetch(scConfig.CART_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        setProducts(json.data.cart);
        setTotals(json.data.totals);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function onRemoveItem() {
    fetch(scConfig.REMOVE_FROM_CART_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        //alert
      })
      .catch(e => {
        console.log(e);
      });
  }

  // render() {
  //   if (this.state.products == null || this.state.products.length == 0) {
  //     return (
  //       <View>
  //         <Text>Loading</Text>
  //       </View>
  //     );
  //   }
  //   const { products } = this.state;

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView>
          {products.map(item => (
            <View style={styles.productContainer}>
              <Image
                id={item._id}
                accessibilityLabel={item.name}
                url
                source={{ uri: item.imageUrl }}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>{item.name}</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>{item.quantity}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>{item.total}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.totalsContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.priceLabel}>TOTAL :</Text>
          <Text style={styles.price}>{totals.total}</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.priceLabel}>DISCOUNT :</Text>
          <Text style={styles.price}>{totals.discount}</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.priceLabel}>SUB TOTAL :</Text>
          <Text style={styles.price}>{totals.subTotal}</Text>
        </View>
      </View>
    </View>
  );
}

export default Cart;
