import React from "react";
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
const PRODUCT_URL = "http://192.168.1.22:5000/product";
class Product extends React.Component {
  state = {
    product = {}
  };
  static navigationOptions = {
    title: "Sandisk 64gb SdCard"
  };

  btnAddToCartHandle() {
    Alert.alert("Add To Cart");
  }

  componentDidMount() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', '0');

    fetch(PRODUCT_URL + "?id" + itemId)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          product: json.data.product
        });
      })
      .catch(e => {
        console.log(e);
      });

      console.log(this.state.product);
  }

  render() {
    const {product} = this.state;
    return (
      // <ImageBackground
      //   //source={require("../assets/Background/0de5ab56265287a9b09e06d1ee103022.jpg")}
      //   style={{
      //     backgroundColor: "#B2EBF2",
      //     width: "100%", // applied to Image
      //     height: "100%"
      //   }}
      //   imageStyle={{
      //     resizeMode: "contain" // works only here!
      //   }}
      // >
      
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.productHeader}>{product.name}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            id={product._id}
            accessibilityLabel="product Image"
            source={{uri : product.imageUrl}}
            style={styles.productImage}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        {/* ADD SPINNER FOR QUANTITY */}
        {/* <Image accessibilityLabel="favorite" /> */}
        <View>
          <Text style={styles.description}>
           {product.description}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.btnAddToCartHandle}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
      // </ImageBackground>
    );
  }
}

export default Product;
