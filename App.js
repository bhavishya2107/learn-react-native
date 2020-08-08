import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import FirstScreen from "./app/assets/screens/FirstScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";

import AppText from "./app/assets/components/AppText";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/assets/components/AppButton";
import { handlePress } from "./app/assets/config/methods";
import AppCard from "./app/assets/components/AppCard";
export default function App() {
  return (
    // <WelcomeScreen onPress={handlePress} />
    <View style={styles.mainView}>
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>

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

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingVertical: 100,
  },
});
