import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class Category extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image>BANNER</Image>

        <ScrollView>
          <View>
            <Image />
            <Text>CATEGORY NAME</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Category;
