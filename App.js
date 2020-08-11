import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import FirstScreen from "./app/assets/screens/FirstScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";
import Screen from "./app/assets/components/Screen";
import Icon from "./app/assets/components/Icon";
import AppText from "./app/assets/components/AppText";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/assets/components/AppButton";
import { handlePress } from "./app/assets/config/methods";
import AppCard from "./app/assets/components/AppCard";
import ListingDetailsScreen from "./app/assets/components/ListingDetailsScreen.js";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import ListItem from "./app/assets/components/ListItem";
import AccountScreen from "./app/assets/screens/AccountScreen";
import ListingsScreen from "./app/assets/screens/ListingsScreen";
import AppTextInput from "./app/assets/components/AppTextInput";
import AppPicker from "./app/assets/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Sofa", value: 2 },
  { label: "Chair", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    // <WelcomeScreen onPress={handlePress} />
    // <View style={styles.mainView}>
    //   <AppCard
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    //   <ListingDetailsScreen title="Red Jacket for sale" subtitle="$100" />
    // </View>

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
    // <MessagesScreen />
    // <Screen>
    //   <ListItem
    //     title="My title"
    //     ImageComponent={<Icon name="email" size={50} />}
    //   />
    //   {/* <Icon name="email" size={100} /> */}
    // </Screen>
    // <AccountScreen />
    // <ListingsScreen />
    // <AppTextInput placeholder="Username" icon="email" />
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingVertical: 100,
  },
});
