import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ onPress }) => {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={onPress} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    // flex: "row",
    // justifyContent: "space-between",
  },
  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "#fc5c65",
  // },
  // registerButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "#4ecdc4",
  // },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
