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
import InputSpinner from "react-native-input-spinner";

import { scConfig } from "../config";

function ProductScreen({ route, navigation }) {
  const [product, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const { itemId } = route.params;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setQuantity(1);
  }, [itemId]);

  async function getProduct() {
    console.log("product detail page loaded");

    console.log("itemId", itemId);
    if (itemId !== "0") {
      //console.log("itemId", scConfig.PRODUCT_URL + itemId);
      await fetch(scConfig.PRODUCT_URL + itemId)
        .then(response => {
          return response.json();
        })
        .then(json => {
          //console.log(json.data.product);
          setProduct(json.data.product);
          setTitle(json.data.product.title);
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
      fetch(scConfig.ADD_TO_CART_URL, {
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
      <View style={styles.quantityContainer}>
        <InputSpinner
          max={10}
          min={1}
          step={1}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          value={quantity}
          onChange={num => setQuantity(num)}
        />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

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
