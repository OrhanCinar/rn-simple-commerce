import React from "react";
import { View, Text, TextInput, Image, Button, ScrollView } from "react-native";

import styles from "./styles/Cart.style";
const CART_URL = "http://192.168.1.22:5000/cart";
const REMOVE_FROM_CART_URL = "http://192.168.1.22:5000/removefromcart";

class Cart extends React.Component {
  state = {
    products: []
  };
  static navigationOptions = {
    title: "Cart"
  };

  componentDidMount() {
    fetch(CART_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          products: json.data.products
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  onRemoveItem() {
    fetch(REMOVE_FROM_CART_URL)
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                id="32740307068"
                accessibilityLabel="product Image"
                source={require("../assets/Products/Images/32880261657_01.jpg")}
                style={styles.productImageContainer}
              />

              <View style={styles.productInfoContainer}>
                <Text style={styles.productHeader}>Lingerie</Text>
              </View>

              <View style={styles.priceContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Price :</Text>
                  <Text style={styles.price}>10.00</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Quantity :</Text>
                  <Text style={styles.price}>5</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.price}>50.00</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.priceLabel}>TOTAL :</Text>
            <Text style={styles.price}>50.00</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.priceLabel}>DISCOUNT :</Text>
            <Text style={styles.price}>0.00</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.priceLabel}>SUB TOTAL :</Text>
            <Text style={styles.price}>50.00</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Cart;
