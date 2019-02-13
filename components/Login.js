import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "./styles/Login.style";
class Login extends React.Component {
  state = {};
  onLogin() {
    this.props.navigation.navigate("Main", { id: 0 });
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/Background/7925b06244744a123a371edb91863c4d.jpg")}
        style={{
          //backgroundColor: "#fc0",
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

          <TouchableOpacity
            style={{ height: 100, marginTop: 10, color: "#fff" }}
            onPress={() =>
              this.props.navigation.push("Product", {
                itemId: Math.floor(Math.random() * 100)
              })
            }
          >
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
