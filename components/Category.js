import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import styles from "./styles/Category.style";
import { scConfig } from "../config";

class Category extends React.Component {
  state = {
    category: [],
    banner: []
  };

  static navigationOptions = {
    title: "Categories"
  };

  componentDidMount() {
    fetch(scConfig.CATEGORY_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        //console.log(json.data);
        this.setState({
          category: json.data.categoryList
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    if (this.state.category == null || this.state.category.length == 0) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    const { category, banner } = this.state;

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
            {category.map(category => (
              <View style={styles.categoryContainer} key={category._id}>
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
