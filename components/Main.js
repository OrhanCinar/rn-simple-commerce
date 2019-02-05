import React from "react";
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  ScrollView
} from "react-native";

class Main extends React.Component {
  state = {
    products: [
      {
        id: 32740307068,
        name: "Sandisk 64gb SdCard",
        price: 10,
        imageUrl: "../assets/Products/Images/32740307068_01.jpg"
      },
      {
        id: 32880261657,
        name: "Lingerie",
        price: 23,
        imageUrl: "../assets/Products/Images/32740307068_01.jpg"
      },
      {
        id: 32903877682,
        name: "Samsung Screen Protection",
        price: 8.99,
        imageUrl: "../assets/Products/Images/32740307068_01.jpg"
      },
      {
        id: 32924478819,
        name: "Man Bag",
        price: 18.5,
        imageUrl: "../assets/Products/Images/32740307068_01.jpg"
      },
      {
        id: 32947594040,
        name: "Utilities",
        price: 14.25,
        imageUrl: "../assets/Products/Images/32740307068_01.jpg"
      }
    ]
  };
  render() {
    // let renderPhotoTypes = () => {
    //   let type = [];

    //   this.state.products.map(product => {
    //     type.push(
    //       <Image
    //         key={product.id}
    //         source={{ source: product.imageUrl }}
    //         // style={{ width: 400, height: 400 }}
    //       />
    //     );
    //   });
    //   console.log(type);
    //   return type;
    // };

    //return <View>{renderPhotoTypes()}</View>;

    // return (
    //   <ListView
    //     dataSource={this.state.products}
    //     renderRow={data => {
    //       <View>
    //         <Image
    //           source={require("../assets/Products/Images/32947594040_01.jpg")}
    //           style={{ width: 200, height: 200 }}
    //         />
    //       </View>;
    //     }}
    //   />
    // );

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>

        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("../assets/Products/Images/32740307068_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32880261657_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32903877682_01.jpg")}
              style={styles.productItem}
            />

            <Image
              source={require("../assets/Products/Images/32924478819_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32947594040_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32740307068_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32880261657_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32903877682_01.jpg")}
              style={styles.productItem}
            />

            <Image
              source={require("../assets/Products/Images/32924478819_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32947594040_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32740307068_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32880261657_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32903877682_01.jpg")}
              style={styles.productItem}
            />

            <Image
              source={require("../assets/Products/Images/32924478819_01.jpg")}
              style={styles.productItem}
            />
            <Image
              source={require("../assets/Products/Images/32947594040_01.jpg")}
              style={styles.productItem}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "row",

    marginLeft: 5,
    marginRight: 5
  },
  productItem: {
    justifyContent: "space-between",
    marginBottom: 10,
    width: 200,
    height: 200
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "grey"
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50
  }
});
