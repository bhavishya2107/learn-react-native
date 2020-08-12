import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/bhavishya.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/bhavishya.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/bhavishya.jpeg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDeleteMessage = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/bhavishya.jpeg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
