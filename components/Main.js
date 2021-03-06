import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles/Main.style";
//import ProductScreen from "./Product";

import { scConfig } from "../config";

function Main({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // if (route.params?.post) {
    // }
    //console.log(scConfig);
    getProducts();
  }, []);

  useEffect(() => {
    getBanners();
  }, []);

  async function getProducts() {
    fetch(scConfig.PRODUCTS_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setProducts(json.data.products);
        // this.setState({
        //   products: json.data.products
        // });
      })
      .catch(e => {
        console.log(e);
      });
  }

  function getBanners() {
    fetch(scConfig.BANNERS_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setBanners(json.data.banners);
        // this.setState({
        //   banners: json.data.banners
        // });
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <View style={styles.headerContainer}>
      {/* <Text style={styles.headerText}>Helix E-Commerce</Text> */}
      <View style={styles.searchBoxContainer}>
        <TextInput placeholder="Search..." style={styles.searchBox}></TextInput>
      </View>
      {banners.length > 0 && (
        <View style={styles.bannerContainer}>
          <Image
            url
            source={{ uri: banners[0].imageUrl }}
            style={styles.bannerImage}
          />
        </View>
      )}
      <View style={styles.categoryBar}>
        <Ionicons
          name="md-pricetags"
          style={{ marginRight: 50, marginLeft: 40 }}
          size={30}
        />
        <Ionicons name="ios-cart" style={{ marginRight: 50 }} size={30} />
        <Ionicons
          name="ios-american-football"
          style={{ marginRight: 50 }}
          size={30}
        />
        <Ionicons name="ios-desktop" style={{ marginRight: 50 }} size={30} />
        <Ionicons name="ios-cube" style={{ marginRight: 50 }} size={30} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {products.map(item => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductScreen", {
                  screen: "ProductScreen",
                  itemId: item._id,
                  title: item.name
                })
              }
              key={item._id}
            >
              <View style={styles.productContainer}>
                <Image
                  url
                  source={{ uri: item.imageUrl }}
                  style={styles.productImage}
                />
                <View style={styles.productTextContainer}>
                  <Text style={styles.productHeader}>{item.name}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.oldPrice}>$ {item.oldPrice}</Text>
                  <Text style={styles.price}>$ {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default Main;
