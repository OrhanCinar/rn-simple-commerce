import React from "react";
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import styles from "./styles/Main.style";
class Main extends React.Component {
  state = {};
  static navigationOptions = {
    title: "Best Sellers"
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        {/* <Text style={styles.headerText}>Most Selling Products</Text> */}
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push("Product", {
                  itemId: Math.floor(Math.random() * 100)
                })
              }
            >
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
            </TouchableOpacity>
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
            <View>
              <Button
                onPress={() =>
                  this.props.navigation.push("Category", {
                    itemId: Math.floor(Math.random() * 100)
                  })
                }
                title="Click"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main;
