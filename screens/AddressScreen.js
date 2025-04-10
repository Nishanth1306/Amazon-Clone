import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { UserType } from "../UserContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import config from "../src/config.js";

const AddressSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Only letters and spaces are allowed")
    .required("Name is required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  houseNo: Yup.string().required("House No is required"),
  street: Yup.string().required("Street is required"),
  landmark: Yup.string().required("Landmark is required"),
  postalCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
});

const AddressScreen = () => {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ height: 50, backgroundColor: "#00CED1" }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a new Address
        </Text>

        <TextInput
          placeholderTextColor={"black"}
          placeholder="Country"
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />

        <Formik
          initialValues={{
            name: "",
            mobileNo: "",
            houseNo: "",
            street: "",
            landmark: "",
            postalCode: "",
          }}
          validationSchema={AddressSchema}
          onSubmit={(values, actions) => {
            axios
              .post(`${config.API_URL}/addresses`, {
                userId,
                address: values,
              })
              .then(() => {
                Alert.alert("Success", "Address added successfully");
                actions.resetForm();
                setTimeout(() => {
                  navigation.goBack();
                }, 500);
              })
              .catch((error) => {
                const errorMessage =
                  error.response?.data?.message || "Failed to add address";
                Alert.alert("Error from Backend", errorMessage);
                console.log("error", error);
              });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Full name (First and last name)
                </Text>
                <TextInput
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="enter your name"
                />
                {touched.name && errors.name && (
                  <Text style={{ color: "red" }}>{errors.name}</Text>
                )}
              </View>

              <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Mobile number
                </Text>
                <TextInput
                  value={values.mobileNo}
                  onChangeText={handleChange("mobileNo")}
                  onBlur={handleBlur("mobileNo")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Mobile No"
                  keyboardType="number-pad"
                />
                {touched.mobileNo && errors.mobileNo && (
                  <Text style={{ color: "red" }}>{errors.mobileNo}</Text>
                )}
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Flat, House No, Building, Company
                </Text>
                <TextInput
                  value={values.houseNo}
                  onChangeText={handleChange("houseNo")}
                  onBlur={handleBlur("houseNo")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder=""
                />
                {touched.houseNo && errors.houseNo && (
                  <Text style={{ color: "red" }}>{errors.houseNo}</Text>
                )}
              </View>

              <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Area, Street, Sector, Village
                </Text>
                <TextInput
                  value={values.street}
                  onChangeText={handleChange("street")}
                  onBlur={handleBlur("street")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder=""
                />
                {touched.street && errors.street && (
                  <Text style={{ color: "red" }}>{errors.street}</Text>
                )}
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Landmark
                </Text>
                <TextInput
                  value={values.landmark}
                  onChangeText={handleChange("landmark")}
                  onBlur={handleBlur("landmark")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Eg near Apollo hospital"
                />
                {touched.landmark && errors.landmark && (
                  <Text style={{ color: "red" }}>{errors.landmark}</Text>
                )}
              </View>

              <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Pincode
                </Text>
                <TextInput
                  value={values.postalCode}
                  onChangeText={handleChange("postalCode")}
                  onBlur={handleBlur("postalCode")}
                  placeholderTextColor={"black"}
                  style={{
                    padding: 10,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                  placeholder="Enter Pincode"
                  keyboardType="number-pad"
                />
                {touched.postalCode && errors.postalCode && (
                  <Text style={{ color: "red" }}>{errors.postalCode}</Text>
                )}
              </View>

              <Pressable
                onPress={handleSubmit}
                style={{
                  backgroundColor: "#FFC72C",
                  padding: 19,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Add Address</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
