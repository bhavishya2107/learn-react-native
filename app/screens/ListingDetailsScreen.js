import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = ({ title, subtitle }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/bhavishya.jpeg")}
            title="Bhavishya Negi"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: colors.dark,
  },
  imageContainer: {
    marginVertical: 30,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 25,
  },
});
