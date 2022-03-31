import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "styled-components/native";
import { darkMode, lightMode } from "./src/themeStyles";
import LoggedOutNav from "./src/navigators/LoggedOutNav";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { AppRegistry } from "react-native-web";
import { Text } from "react-nativ";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(scheme => {
      setTheme(scheme.colorScheme);
    });
    return () => subscription.remove();
  }, []);

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
        <AppearanceProvider>
          <NavigationContainer fallback={<Text>Loading...</Text>}>
            <LoggedOutNav></LoggedOutNav>
          </NavigationContainer>
        </AppearanceProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("Booker", () => App);
