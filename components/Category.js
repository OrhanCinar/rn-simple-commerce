import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import styles from "./styles/Category.style";
import { scConfig } from "../config";

function Category() {
  const [categories, setCategories] = useState([]);
  const [banner, setBanner] = useState([]);
  const hasItems = categories.length > 0;

  function getCategories() {
    fetch(scConfig.CATEGORY_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        //console.log(json.data);
        setCategories(json.data.categoryList);
      })
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    // {hasItems

    //         <View>
    //           <Text>Loading</Text>
    //         </View>
    // }

    <View style={{ marginTop: 20 }}>
      {banner.map(banner => (
        <View>
          <Image
            source={{ uri: banner.imageUrl }}
            style={{ height: 200, width: 400 }}
          />
        </View>
      ))}
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {categories.map(category => (
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

export default Category;
