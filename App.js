import React from "react";
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
        {/* <Main /> */}
        {/* <Product /> */}
      </View>
    );
  }
}

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
