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

const REGISTER_URL = "http://192.168.1.22:5000/register";
const LOGIN_URL = "http://192.168.1.22:5000/login";

class Login extends React.Component {
  state = {};

  static navigationOptions = {
    title: "Login"
  };

  onLogin() {
    fetch(LOGIN_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        //console.log(json.data);
        this.setState({
          userData: json.data
        });
      })
      .catch(e => {
        console.log(e);
      });

    console.log(this.state.userData);
    //this.props.navigation.navigate("Main", { id: 0 });
  }
  onRegister() {
    fetch(REGISTER_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.data);
      })
      .catch(e => {
        console.log(e);
      });

    //this.props.navigation.navigate("Main", { id: 0 });
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/Background/7925b06244744a123a371edb91863c4d.jpg")}
        style={{
          //backgroundColor: "#fc0",
          width: "100%", // applied to Image
          height: "100%",
          flexWrap: "wrap"
        }}
        // imageStyle={{
        //   resizeMode: "contain" // works only here!
        // }}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Username" style={styles.inputs} />
            <TextInput placeholder="Password" style={styles.inputs} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push("Home", {
                  //itemId: Math.floor(Math.random() * 100)
                })
              }
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
