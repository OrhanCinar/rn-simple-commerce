import React, { useState, useEffect } from "react";
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
import ProductScreen from "./Product";
const PRODUCTS_URL = "http://192.168.1.13:5000/products";
const BANNERS_URL = "http://192.168.1.13:5000/banners";

function Main({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // if (route.params?.post) {
    // }
    getProducts();
  }, []);

  useEffect(() => {
    //getBanners();
  }, []);

  async function getProducts() {
    fetch(PRODUCTS_URL)
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
    fetch(BANNERS_URL)
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
      {/* <Text style={styles.headerText}>Most Selling Products</Text> */}
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
                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                  <Text style={styles.price}>{item.price}</Text>
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
