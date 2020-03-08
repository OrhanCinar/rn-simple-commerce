import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "./styles/Product.style";
//var Spinner = require("rn-spinner");

const PRODUCT_URL = "http://192.168.1.13:5000/product/";
const ADD_TO_CART_URL = "http://192.168.1.13:5000/addToCart";

function ProductScreen({ route, navigation }) {
  // state = {
  //   product: {},
  //   quantity: 1,
  //   title: ""
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam("title", "Go Back")
  //     // headerLeft: (
  //     //   <Button
  //     //     onPress={() => navigation.popToTop()}
  //     //     title="Info"
  //     //     color="#fff"
  //     //   />
  //     // )
  //   };
  // };
  const [product, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const { itemId } = route.params;
  const { quantity, setQuantity } = useState(0);
  useEffect(() => {
    console.log("product detail page useEffect");

    getProduct();
  }, [itemId]);

  async function getProduct() {
    console.log("product detail page loaded");

    console.log("itemId", itemId);
    if (itemId !== "0") {
      console.log("itemId", PRODUCT_URL + itemId);
      await fetch(PRODUCT_URL + itemId)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json.data.product);
          setProduct(json.data.product);
          setTitle(json.data.product.title);
          // this.setState({
          //   product: json.data.product,
          //   title: json.data.product.title
          // });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  function btnAddToCartHandle() {
    var data = {
      quantity: quantity,
      productId: product._id
    };
    try {
      fetch(ADD_TO_CART_URL, {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(t => {
          Alert.alert("Added To Cart");
        });
    } catch (error) {
      Alert.alert("Could Not Added To Cart");
    }
  }

  // render() {
  //   const { product } = this.state;
  //   const { navigation } = this.props;
  //   const itemId = navigation.getParam("itemId", "0");

  //console.log("itemId", itemId);
  // if (!product) {
  //   return "No Product";
  // }

  // return (
  //   <View>
  //     <Text>{product.name}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.productHeader}>{product.name}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          id={product._id}
          accessibilityLabel="product Image"
          source={{ uri: product.imageUrl }}
          style={styles.productImage}
        />
      </View>

      {/* <View>
          <Spinner
            max={10}
            min={2}
            default={5}
            color="#f60"
            numColor="#f60"
            value={this.state.quantity}
            onNumChange={num => {
              this.setState({ quantity: num });
            }}
          />
        </View> */}

      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      {/* ADD SPINNER FOR QUANTITY */}
      {/* <Image accessibilityLabel="favorite" /> */}
      <View>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={btnAddToCartHandle}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ImageBackground>
  );
}

export default ProductScreen;
