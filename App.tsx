import React from 'react'

// This is for custom font
import AppLoading from "expo-app-loading"
import {useFonts} from "expo-font"

// React navigation
import RootStack from "./navigators/RootStack"

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <RootStack/>
  );
};
