import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import styles from "./styles/Category.style";

class Category extends React.Component {
  state = {};
  static navigationOptions = {
    title: "Categories"
  };
  render() {
    return (
      <View>
        <Image
          source={require("../assets/Banners/HTB1oXyyaZrrK1RjSspa763REXXa5.png")}
          style={{ height: 200, width: 400 }}
        />

        <ScrollView>
          <View style={styles.categoryContainer}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/Icons/bags.png")}
            />
            <Text>BAGS</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/Icons/dress.png")}
            />
            <Text>WOMEN DRESS</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/Icons/tools.png")}
            />
            <Text>TOOLS</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/Icons/smartphone.png")}
            />
            <Text>SMARTPHONE</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/Icons/computer.png")}
            />
            <Text>COMPUTERS</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Category;
