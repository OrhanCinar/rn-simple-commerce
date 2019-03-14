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

const PRODUCTS_URL = "http://192.168.1.22:5000/products";
const BANNERS_URL = "http://192.168.1.22:5000/banners";

class Main extends React.Component {
  state = {
    products: [],
    banners: []
  };
  static navigationOptions = {
    title: "Best Sellers"
  };

  componentDidMount() {
    fetch(PRODUCTS_URL)
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

    fetch(BANNERS_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          banners: json.data.banners
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    if (this.state.products == null || this.state.products.length == 0) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    const { products } = this.state;

    return (
      <View style={styles.headerContainer}>
        {/* <Text style={styles.headerText}>Most Selling Products</Text> */}
        <ScrollView>
          <View style={styles.container}>
            {products.map(item => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push("Product", {
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
            {/* 
            <View>
              <Button
                onPress={() =>
                  this.props.navigation.push("Cart", {
                    itemId: Math.floor(Math.random() * 100)
                  })
                }
                title="Cart"
              />
              <Button
                onPress={() =>
                  this.props.navigation.push("Login", {
                    itemId: Math.floor(Math.random() * 100)
                  })
                }
                title="Login"
              />
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main;
