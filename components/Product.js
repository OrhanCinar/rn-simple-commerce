import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert,
  ImageBackground
} from "react-native";

class Product extends React.Component {
  state = {};

  btnAddToCartHandle() {
    Alert.alert("Add To Cart");
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/Background/0de5ab56265287a9b09e06d1ee103022.jpg")}
        style={{
          backgroundColor: "#fc0",
          width: "100%", // applied to Image
          height: "100%"
        }}
        imageStyle={{
          resizeMode: "contain" // works only here!
        }}
      >
        <View style={styles.container}>
          <View>
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
            La vie merveilleuse, le disque est à vous Carte mémoire SanDisk
            haute vitesse mobile micro SDXC UHS-I Résistant au froid et à la
            chaleur, résistant aux rayons X, résistant aux chocs, étanche,
            anti-magnétique Découvrez des photos de qualité supérieure, une
            capture vidéo full HD et des applications d'application plus rapides
          </Text>

          <Button
            color="#841584"
            title="ADD TO CART"
            onPress={this.btnAddToCartHandle}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between"
  },
  productItem: {
    //marginBottom: 10,
    width: 200,
    height: 200
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#202020",
    marginBottom: 5
  },
  productHeader: {
    fontSize: 30,
    fontWeight: "bold"
  },
  btnAdd: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#841584",
    height: 36,
    marginBottom: 5
  },
  priceContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green"
  },
  oldPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontStyle: "italic"
  },
  description: {
    textAlign: "justify",
    color: "#190033",
    fontSize: 18
  }
});
