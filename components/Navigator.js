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
//https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc
