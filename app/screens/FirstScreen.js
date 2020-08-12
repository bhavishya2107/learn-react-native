import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function FirstScreen() {
  const handlePress = () => console.log("on press react native");
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
        <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 200,
            uri:
              "https://avatars1.githubusercontent.com/u/22442931?s=460&u=b7e018cf0d91a8913e5665d7315225480a423f7e&v=4",
          }}
        />
      </TouchableNativeFeedback>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableNativeFeedback>
        <View
          style={{
            marginTop: 10,
            height: 70,
            width: 150,
            backgroundColor: "dodgerblue",
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", alignItems: "center" }}
          >
            This is a view div
          </Text>
        </View>
      </TouchableNativeFeedback>
      <SafeAreaView style={styles.buttonDiv}>
        <Button
          title="CLick me"
          onPress={() =>
            Alert.alert("My Alert", "My message", [
              { text: "Yes", onPress: () => console.log("you clicked yes") },
              { text: "No", onPress: () => console.log("you clicked no") },
            ])
          }
        />
      </SafeAreaView>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDiv: {
    backgroundColor: "brown",
    marginTop: Platform.OS === "android" ? 10 : 0,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
});
