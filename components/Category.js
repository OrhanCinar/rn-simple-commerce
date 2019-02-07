import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class Category extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image
          source={require("../assets/Banners/HTB1oXyyaZrrK1RjSspa763REXXa5.png")}
          style={{ height: 50, width: 200 }}
        />

        <ScrollView>
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/Icons/bags.png")}
            />
            <Text>BAGS</Text>
          </View>
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/Icons/dress.png")}
            />
            <Text>WOMEN DRESS</Text>
          </View>
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/Icons/tools.png")}
            />
            <Text>TOOLS</Text>
          </View>

          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/Icons/smartphone.png")}
            />
            <Text>SMARTPHONE</Text>
          </View>
          <View>
            <Image
              style={{ height: 50, width: 50 }}
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
