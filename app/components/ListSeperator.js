import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ListSeperator = () => {
  return <View style={styles.seperator}></View>;
};

export default ListSeperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grey,
  },
});
