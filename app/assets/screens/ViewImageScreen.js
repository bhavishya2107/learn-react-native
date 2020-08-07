import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.delIcon}></View>
      <Image
        style={styles.chairImage}
        source={require("../../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  chairImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  delIcon: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
