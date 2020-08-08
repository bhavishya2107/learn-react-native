import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.light} size={30} />
      </View>
      <View style={styles.delIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.light}
          size={30}
        />
      </View>
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
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  delIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
