import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText>{placeholder}</AppText>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: Constants.statusBarHeight,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginRight: 10,
  },
});
