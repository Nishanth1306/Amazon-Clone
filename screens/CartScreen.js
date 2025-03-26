import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchBar}>
          <Pressable style={styles.searchInput}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Search" style={styles.input} />
          </Pressable>
          <Entypo name="mic" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

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
});
