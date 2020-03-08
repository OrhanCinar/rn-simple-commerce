import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert
} from "react-native";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

import Main from "./components/Main";

const Tab = createBottomTabNavigator();

// import Login from "./components/Login";

import ProductScreen from "./components/Product";
import Category from "./components/Category";
// import Cart from "./components/Cart";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main}></Tab.Screen>
        <Tab.Screen name="Category" component={Category}></Tab.Screen>
        <Tab.Screen name="ProductScreen" component={ProductScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   static navigationOptions = {
//     title: "Home"
//   };
//   static navigationOptions = {
//     drawerLabel: "Home"
//   };
//   render() {
//     {
//       /* return <AppContainer />; */
//     }

//     return (
//       <View style={styles.container}>
//         {/* <Login /> */}
//         {/* <Main /> */}
//         {/* <Product /> */}
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator(
//   {
//     Home: Main,
//     Category: Category
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// const ProductStack = createStackNavigator({
//   Product: Product
// });

// const CategoryStack = createStackNavigator({
//   Category: Category
// });

// const CartStack = createStackNavigator({
//   Cart: Cart
// });

// const Drawer = createDrawerNavigator(
//   {
//     Home: Main,
//     Category: Category
//   },
//   {
//     navigationOptions: {
//       drawerLockMode: "locked-closed"
//     }
//     //backBehavior: "none"
//   }
// );

// export default createAppContainer(
//   createBottomTabNavigator({
//     Home: HomeStack,
//     Category: CategoryStack,
//     Cart: CartStack,
//     Product: ProductStack
//   })
// );

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
