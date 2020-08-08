import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function AppText({ children }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
