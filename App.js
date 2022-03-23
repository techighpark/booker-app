import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const startAsync = () => {
    const fontToLoad = [Ionicons.font];
    const fontPromises = fontToLoad.map(font => Font.loadAsync(font));
    const logoToload = [require("./assets/logo.png")];
    const logoPromises = logoToload.map(logo => Asset.loadAsync(logo));

    return Promise.all([...fontPromises, ...logoPromises]);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={startAsync}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />
      <Text>Set up</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
