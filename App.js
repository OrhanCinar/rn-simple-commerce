import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {

     {/* return <AppContainer />; */}

    return (
      <View style={styles.container}>
        <Login />
        {/* <Main /> */}
        {/* <Product /> */}
        
       
      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    PRoduct: ProductScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;


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
