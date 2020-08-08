import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import FirstScreen from "./app/assets/screens/FirstScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";

import AppText from "./app/assets/components/AppText";
import { View, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/assets/components/AppButton";

export default function App() {
  const handlePress = () => {
    Alert.alert("My Alert", "My message", [
      { text: "Yes", onPress: () => console.log("you clicked yes") },
      { text: "No", onPress: () => console.log("you clicked no") },
    ]);
  };
  return (
    <WelcomeScreen onPress={handlePress} />
    // <FirstScreen />
    // <ViewImageScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <AppText>I love React Native</AppText>
    //   <MaterialCommunityIcons name="email" size={200} color="tomato" />
    //   <AppButton title="Login" />
    // </View>
  );
}
