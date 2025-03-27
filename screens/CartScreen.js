import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  console.log(total);
  console.log(cart);
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
        <View
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "400" }}>Sub TOtal </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{total}</Text>
        </View>

        <Text style={{ marginHorizontal: 10 }}>EMI Option Available</Text>

        <Pressable
          style={{
            backgroundColor: "#FFC72C",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text>Proceed to Buy({cart.length}) items</Text>
        </Pressable>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 16,
          }}
        />

        <View>
          {cart?.map((item, index) => (
            <View
              style={{
                backgroundColor: "white",
                marginVertical: 10,
                borderBottomColor: "#F0F0F0",
                borderWidth: 2,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderRightWidth: 0,
              }}
            >
              <Pressable
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Image
                    style={{ width: 140, height: 140, resizeMode: "contain" }}
                    source={{ uri: item?.image }}
                  />
                </View>

                <View>
                  <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 }}
                  >
                    {item?.price}
                  </Text>
                  <Text style={{ color: "green" }}>In Stock</Text>
                </View>
              </Pressable>

              <Pressable>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}
                >
                  <Pressable 
                    style={{
                      backgroundColor: "#D8D8D8",
                      padding: 7,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}
                  >
                    <AntDesign name="delete" size={24} color="black" />
                  </Pressable>

                  


                </View>
              </Pressable>
            </View>
          ))}
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

    flex: 1,
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
