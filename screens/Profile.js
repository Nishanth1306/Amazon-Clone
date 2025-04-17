import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import config from "../src/config.js";

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "ഹലോ", language: "Malayalam" },
  { text: "வணக்கம்", language: "Tamil" },
];


const Profile = () => {
  const { userId, setUserId } = useContext(UserType);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); 

    return () => clearInterval(timer); 
  }, []);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#00CED1",
      },
      headerLeft: () => (
        <Image
          style={{ width: 140, height: 120, resizeMode: "contain" }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png",
          }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginRight: 12,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />

          <AntDesign name="search1" size={24} color="black" />
        </View>
      ),
    });
  }, []);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/profile/${userId}`);
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation.replace("Login");
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/orders/${userId}`);
        const orders = response.data.orders;
        setOrders(orders);

        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchOrders();
  }, []);
  //console.log("orders", orders);
  if (userId) {
    return (
      <ScrollView
        style={{
          marginTop: 10,
          padding: 10,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Welcome {user?.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 12,
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Your orders</Text>
          </Pressable>

          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Your Account</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 12,
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Buy Again</Text>
          </Pressable>

          <Pressable
            onPress={logout}
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Logout</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {loading ? (
            <Text>Loading...</Text>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <Pressable
                style={{
                  marginTop: 20,
                  padding: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#d0d0d0",
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={order._id}
              >
                {order.products.slice(0, 1)?.map((product) => (
                  <View style={{ marginVertical: 10 }} key={product._id}>
                    <Image
                      source={{ uri: product.image }}
                      style={{ width: 100, height: 100, resizeMode: "contain" }}
                    />
                  </View>
                ))}
              </Pressable>
            ))
          ) : (
            <Text>No orders found</Text>
          )}
        </ScrollView>
      </ScrollView>
    );
  } else {
    return (
      <SafeAreaView style={{ height: "100%", width: "100%" }}>
        <ScrollView style={{ height: "100%", width: "100%" }}>
          <View
            style={{ backgroundColor: "#74E0DE", width: "100%", height: 60 }}
          ></View>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text>{greetings[index].text}</Text>
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Welcome to Amazon</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Register");
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  width: "90%",
                  height:40,
                  backgroundColor: "#FACC62",
                  borderBlockColor: "black",
                  borderWidth: 1,
                }}
              >
                <Text>Creat account</Text>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "#EFF0F4",
                  marginTop: 10,
                  width: "90%",
                  height: 40,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                }}
              >
                <Text>Sign in</Text>
              </Pressable>

              <View style={{marginTop:30,gap:40}}>
                <Text>Upto $100 cashback on your first order</Text>
                <Text>Free Delivery on first order - for top categories</Text>
                <Text>Easy Return</Text>
                <Text>Pay on Delivery</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Profile;
const styles = StyleSheet.create({});
