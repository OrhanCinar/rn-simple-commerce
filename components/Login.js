import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity
} from "react-native";

class Login extends React.Component {
  state = {};
  onLogin() {}
  render() {
    return (
      <ImageBackground
        source={require("../assets/Background/7925b06244744a123a371edb91863c4d.jpg")}
        style={{
          backgroundColor: "#fc0",
          width: "100%", // applied to Image
          height: "100%"
        }}
        imageStyle={{
          resizeMode: "contain" // works only here!
        }}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Username" style={styles.inputs} />
            <TextInput placeholder="Password" style={styles.inputs} />
          </View>
          {/* 
          <TouchableOpacity
            style={{ height: 100, marginTop: 10, color: "#fff" }}
          >
            <Text>LOGIN</Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    height: 60,
    marginTop: 40,
    width: 240,
    borderRadius: 8,
    borderWidth: 0.9,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    fontSize: 24
  }
});
