import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import ListSeperator from "./ListSeperator";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 20 }}>{label}</AppText>
      <ListSeperator />
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
