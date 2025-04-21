import { StyleSheet, Text, TextInput, View, Pressable ,Platform,ScrollView} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Search = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.searchBar}>
      <Pressable style={styles.searchInput}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search" style={styles.input} />
      </Pressable>
      <Entypo name="mic" size={24} color="black" />
    </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  searchBar: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
