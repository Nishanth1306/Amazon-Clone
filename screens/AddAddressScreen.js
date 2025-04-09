import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useContext, useCallback } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../UserContext";

const PORT = "192.168.0.105";


const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  console.log("userId", userId);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://${PORT}:3000/addresses/67e3b41271db4f020e0e2417`
      );
      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );
  console.log("addresses", addresses);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
      <View style={styles.searchBar}>
        <Pressable style={styles.searchInput}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search" style={styles.input} />
        </Pressable>
        <Entypo name="mic" size={24} color="black" />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>

        <Pressable
          onPress={() => navigation.navigate("AddressScreen")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}
        >
          <Text>Add a new Address</Text>
          <EvilIcons name="arrow-right" size={24} color="black" />
        </Pressable>

        <Pressable>
          {addresses?.map((item, index) => (
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "#D0D0D0",
                flexDirection: "column",
                padding: 10,
                gap: 5,
                marginVertical: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
                <EvilIcons name="location" size={24} color="red" />
              </View>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                {item?.houseNo},{item?.landmark}
              </Text>
              <Text style={{ fontSize: 15, color: "#181818" }}>
                {item?.street}
              </Text>

              <Text style={{ fontSize: 15, color: "#181818" }}> India</Text>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                {" "}
                Contact : {item.mobileNo}
              </Text>

              <Text style={{ fontSize: 15, color: "#181818" }}>
                PinCode:{item?.postalCode}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Edit</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Remove</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 0.9,
                    borderColor: "#D0D0D0",
                  }}
                >
                  <Text>Set as Default</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
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
