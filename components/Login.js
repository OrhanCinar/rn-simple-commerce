import React from "react";
import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";

class Login extends Component {
  state = {};
  render() {
    return (
      <View>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />

        <Button title="Login" />
      </View>
    );
  }
}

export default Login;
