import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";

import { AntDesign, Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addToCart } from "../redux/CartReducer";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProductInfo = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);

  const height = (width * 100) / 100;

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));

    setTimeout(() => {
      setAddedToCart(false);
    }, 5000);
  };

  const [userType, setUserType] = useState("");

  useEffect(() => {
    const getUserType = async () => {
      const type = await AsyncStorage.getItem("userType");
      console.log(type);
      setUserType(type);
    };
    getUserType();
  }, []);

  console.log(userType);

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <ScrollView
      style={{ marginTop: 55, flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>

        <Feather name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20%offer
                </Text>
              </View>
              <View>
                <AntDesign name="sharealt" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#C60C30",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 10,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
          {route?.params?.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            marginTop: 6,
            color: "grey",
          }}
        >
          ₹{route?.params?.price}
        </Text>

        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text>Color:</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {route?.params?.color}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text>Size:</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {route?.params?.size}
          </Text>
        </View>

        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
            Total:{route?.params?.price}
          </Text>
          <Text style={{ color: "#00CED1" }}>
            FEEE Delivery Tomorrow by 6.PM
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Delivery to Nishanth - Coimbatore
          </Text>
        </View>

        <Text style={{ marginHorizontal: 10, fontWeight: 500, color: "green" }}>
          In Stock
        </Text>

        <Pressable
          onPress={() => {
            console.log(userType);
            if (userType === "guest") {
              Alert.alert(
                "Guest Access",
                "You need to log in to add items to your cart.",
                [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Login",
                    onPress: () => navigation.navigate("Login"),
                  },
                ]
              );
              return;
            }

            addItemToCart(route?.params.item);
          }}
          style={{
            backgroundColor: "#FFC72C",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          {addedToCart ? (
            <View>
              <Text>Added to Cart</Text>
            </View>
          ) : (
            <Text>Add to Cart</Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("ConfirmationScreen")}
          style={{
            backgroundColor: "#FFAC1C",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Text>Buy Now </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
