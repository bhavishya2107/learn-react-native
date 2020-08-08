import { Alert } from "react-native";

const handlePress = () => {
  Alert.alert("My Alert", "My message", [
    { text: "Yes", onPress: () => console.log("you clicked yes") },
    { text: "No", onPress: () => console.log("you clicked no") },
  ]);
};

export { handlePress };
