import React from "react";
import { StackNavigator } from "react-native";

const Navigator = StackNavigator(
  {
    login: { screen: LoginStack }
  },
  {
    headerNode: "none",
    title: "Main",
    initialRouteName: "loginStack"
  }
);

export default Navigator;
