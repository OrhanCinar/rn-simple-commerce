import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert
} from "react-native";

import Login from "./components/Login";
import Main from "./components/Main";
import Product from "./components/Product";
import Category from "./components/Category";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home"
  };
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    {
      /* return <AppContainer />; */
    }

    return (
      <View style={styles.container}>
        <Login />
        {/* <Main /> */}
        {/* <Product /> */}
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: Main,
    Category: Category
  },
  {
    initialRouteName: "Home"
  }
);

const ProductStack = createStackNavigator({
  Product: Product
});

const CategoryStack = createStackNavigator({
  Category: Category
});

const CartStack = createStackNavigator({
  Cart: Cart
});

const Drawer = createDrawerNavigator(
  {
    Home: Main,
    Category: Category
  },
  {
    navigationOptions: {
      drawerLockMode: "locked-closed"
    }
    //backBehavior: "none"
  }
);

export default createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Category: CategoryStack,
    Cart: CartStack,
    Product: ProductStack
  })
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
    //flexDirection: "row"
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  buttonContainer: {
    marginBottom: 20,
    width: 300,
    height: 100,
    justifyContent: "space-between"
    //flexDirection: "row"
  }
});
