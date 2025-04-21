import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Search from "../components/Search";

const MenuScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Search />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <TouchableOpacity 
          onPress={() => {
            console.log("Modal Pressed");
          }}
          
          style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
                overflow: "hidden",
                position: "relative",
                flexDirection:'column'
              }}
            >
              <Text style={styles.text}>Amazon Pay</Text>
              <Image
                source={require("../assets/AmazonPay.png")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Mobiles, Electronics & Alexa</Text>
              <Image
                source={require("../assets/Mobile.jpg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Deals & Savings</Text>
              <Image
                source={require("../assets/deals.jpg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Groceries & Pet Supplies</Text>
              <Image
                source={require("../assets/Grocery.jpeg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>MiniTv, Video & Music</Text>
              <Image
                source={require("../assets/minitv.png")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Fashion & Beauty</Text>
              <Image
                source={require("../assets/fashion.jpg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Home, Furniture & Decor</Text>
              <Image
                source={require("../assets/home.jpeg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Prime</Text>
              <Image
                source={require("../assets/prime.jpg")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }}>
            <View
              style={{
                alignItems: "center",
                borderRadius: 10,
                height: 150,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.text}>Games & Live Shopping</Text>
              <Image
                source={require("../assets/games.png")}
                style={styles.Image}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
  Image: {
    height: 50,
    width: 50,
    justifyContent: "center",
},
  halfCircle: {
    position: "absolute",
    bottom: -50,
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: "skyblue",
    zIndex: 1,
  },
});
