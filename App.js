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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true, text: "" };
    this.handleChange = this.handleChange.bind(this);
    // setInterval(
    //   () =>
    //     this.setState(previousState => ({
    //       isShowingText: !previousState.isShowingText
    //     })),
    //   1000
    // );
  }

  handleChange(event) {
    this.setState({ text: event });
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text style={styles.bigBlue}>Hello From React Native</Text>
        <Text style={styles.red}>{this.state.text}</Text>
        <TextInput
          placeholder="Kullanıcı Adı"
          style={{ height: 150 }}
          onChangeText={this.handleChange}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Bana Tıkla"
            onPress={() => {
              Alert.alert("Tuşa bastın");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Bana da Tıkla"
            onPress={() => {
              Alert.alert("Tuşa bastın");
            }}
          />
        </View>

        {/* 
        <View
          style={{
            //flex: 1,
            width: 50,
            height: 50,
            backgroundColor: "powderblue"
          }}
        />
        <View
          style={{
            //flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "skyblue"
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "steelblue"
          }}
        /> */}
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
