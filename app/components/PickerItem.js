import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import ListItemSeperator from "./lists/ListItemSeparator";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 20 }}>{label}</AppText>
      <ListItemSeperator />
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
