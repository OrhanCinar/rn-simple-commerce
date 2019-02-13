import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  ImageBackground
} from "react-native";
import styles from "./styles/Product.style";

class Product extends React.Component {
  state = {};
  static navigationOptions = {
    title: "Sandisk 64gb SdCard"
  };

  btnAddToCartHandle() {
    Alert.alert("Add To Cart");
  }

  render() {
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
          <Text style={styles.productHeader}>Sandisk 64gb SdCard</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            id="32740307068"
            accessibilityLabel="product Image"
            source={require("../assets/Products/Images/32740307068_01.jpg")}
            style={styles.productItem}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>12.00</Text>
          <Text style={styles.price}>10.00</Text>
        </View>
        {/* ADD SPINNER FOR QUANTITY */}
        {/* <Image accessibilityLabel="favorite" /> */}
        <Text style={styles.description}>
          La vie merveilleuse, le disque est à vous Carte mémoire SanDisk haute
          vitesse mobile micro SDXC UHS-I Résistant au froid et à la chaleur,
          résistant aux rayons X, résistant aux chocs, étanche, anti-magnétique
          Découvrez des photos de qualité supérieure, une capture vidéo full HD
          et des applications d'application plus rapides
        </Text>

        <Button
          color="#841584"
          title="ADD TO CART"
          onPress={this.btnAddToCartHandle}
        />
      </View>
      // </ImageBackground>
    );
  }
}

export default Product;
