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

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor:"pink"}}>
        <View style={styles.searchBar}>
          <Pressable style={styles.searchInput}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Search" style={styles.input} />
          </Pressable>
          <Entypo name="mic" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap:"wrap",
            backgroundColor:"white",
            alignItems: "center",
            width: "100%",
            padding: 10,
            
          }}
        >

            {["Your Orders", "Your Order", "Your Order"].map(e => {
                return (
                  <Pressable
                    key={e}
                    style={{
                      height: 25,
                      width: "40%",
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 15,
                      margin: 5,
                    }}
                  >
                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                      {e}
                    </Text>
                  </Pressable>
                );
  
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

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
