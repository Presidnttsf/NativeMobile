import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Grid = ({ users }) => {
  console.log("checking", users);
  return (
    <View>
      <Text style={styles.heading}>Grid with dynamic data</Text>
      <View style={styles.itemContainer}></View>
      {users.map((item) => (
        <Text style={styles.item}>{item.name}</Text>
      ))}
    </View>
  );
};
export default Grid;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    backgroundColor: "grey"
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    margin: 5,
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 70,
    textAlign: "center"
  }
});
