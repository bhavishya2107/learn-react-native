import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListSeperator from "../components/ListSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/bhavishya.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/bhavishya.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/bhavishya.jpeg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <View
                style={{
                  backgroundColor: "red",
                  width: 70,
                }}
              ></View>
            )}
          />
        )}
        ItemSeparatorComponent={ListSeperator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
});
