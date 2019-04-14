import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import styles from "./styles/Category.style";
const CATEGORY_URL = "http://192.168.1.22:5000/category";

class Category extends React.Component {
  state = {
    category: [],
    banner: []
  };

  static navigationOptions = {
    title: "Categories"
  };

  componentDidMount() {
    fetch(CATEGORY_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          category: json.data.categoryList
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    if (
      this.state.categoryList == null ||
      this.state.categoryList.length == 0
    ) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    const { categoryList, banner } = this.state;

    return (
      <View>
        {banner.map(banner => (
          <View>
            <Image
              source={{ uri: banner.imageUrl }}
              style={{ height: 200, width: 400 }}
            />
          </View>
        ))}

        <ScrollView>
          <View style={styles.container}>
            {categoryList.map(category => (
              <View style={styles.categoryContainer}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{ uri: category.imageUrl }}
                />
                <Text>{category.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Category;
