import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import FirstScreen from "./app/screens/FirstScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppText from "./app/components/AppText";
import { View, Alert, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import { handlePress } from "./app/config/methods";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

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
    //   <Icon name="email" size={50} />
    // </Screen>

    // <AccountScreen />

    // <ListingsScreen />

    // <AppTextInput placeholder="Username" icon="email" />

    // AppPicker screen
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>

    // <LoginScreen />
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingVertical: 100,
  },
});
