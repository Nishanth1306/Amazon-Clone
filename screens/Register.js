// import React, { useState } from "react";
// import config from "../src/config.js";
// import { Platform } from "react-native";
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   View,
//   Image,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Pressable,
// } from "react-native";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native";
// import { Formik } from "formik";
// import * as Yup from "yup";

// import axios from "axios";

// // const API_URL = Platform.OS === 'android'
// //     ? "http://10.0.2.2:3000"
// //     : "http://127.0.0.1:3000";

// const Register = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // const navigation = useNavigation();

//   const handleRegister = () => {
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     axios
//       .post(`${config.API_URL}/register`, user)
//       .then((response) => {
//         Alert.alert(
//           "Registration successful",
//           "Please Check your email for verification"
//         );
//         navigation.navigate("Login");
//         setName("");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((error) => {
//         if (error.response && error.response.data.errors) {
//           const errorData = error.response.data.errors;
//           const errorMessages = Object.values(errorData)
//             .map((e) => `${e.path.toUpperCase()}: ${e.message}`)
//             .join("\n");

//           Alert.alert("Registration Error", errorMessages);
//         } else {
//           Alert.alert(
//             "Error",
//             error.response?.data?.message || "Something went wrong"
//           );
//         }

//         console.log("registration failed", error);
//       });
//   };

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
//     >
//       <View>
//         <Image
//           style={{ width: 150, height: 100, marginTop: 15 }}
//           source={{
//             uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
//           }}
//           onError={(e) => console.log("Image Load Error:", e.nativeEvent.error)}
//         />
//       </View>
//       <KeyboardAvoidingView>
//         <View style={{ alignItems: "center" }}>
//           <Text
//             style={{
//               fontSize: 17,
//               fontWeight: "bold",
//               marginTop: 12,
//               color: "#041E42",
//             }}
//           >
//             Register Your Account
//           </Text>
//         </View>

//         <View style={{ marginTop: 80 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//               backgroundColor: "#D0D0D0",
//               paddingVertical: 5,
//               borderRadius: 5,
//               marginTop: 30,
//             }}
//           >
//             <MaterialCommunityIcons
//               style={{ marginLeft: 10 }}
//               name="rename-box"
//               size={24}
//               color="black"
//             />
//             <TextInput
//               value={name}
//               onChangeText={(text) => setName(text)}
//               style={{
//                 color: "grey",
//                 marginVertical: 7,
//                 width: 300,
//                 fontSize: name ? 16 : 16,
//               }}
//               placeholder="Enter Name"
//             />
//           </View>
//         </View>
//         <View style={{ marginTop: 10 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//               backgroundColor: "#D0D0D0",
//               paddingVertical: 5,
//               borderRadius: 5,
//               marginTop: 10,
//             }}
//           >
//             <MaterialCommunityIcons
//               style={{ marginLeft: 8 }}
//               name="email"
//               size={24}
//               color="black"
//             />
//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               style={{
//                 color: "grey",
//                 marginVertical: 7,
//                 width: 300,
//                 fontSize: email ? 16 : 16,
//               }}
//               placeholder="Enter Email"
//             />
//           </View>
//         </View>

//         {/* <View style={{ marginTop: 10 }}>
//                     <View
//                         style={{
//                             flexDirection: "row",
//                             alignItems: "center",
//                             gap: 5,
//                             backgroundColor: "#D0D0D0",
//                             paddingVertical: 5,
//                             borderRadius: 5,
//                             marginTop: 10,
//                         }}
//                     >
//                         <MaterialIcons
//                             style={{ marginLeft: 8 }}
//                             name="password"
//                             size={24}
//                             color="black"
//                         />
//                         <TextInput
//                             value={password}
//                             onChangeText={(text) => setPassword(text)}
//                             style={{
//                                 color: "grey",
//                                 marginVertical: 7,
//                                 width: 300,
//                                 fontSize: password ? 16 : 16,
//                             }}
//                             placeholder="Enter Password"
//                             secureTextEntry={true}
//                         />
//                     </View>
//                 </View> */}
//         <View style={{ marginTop: 10 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               backgroundColor: "#D0D0D0",
//               borderRadius: 5,
//               marginTop: 10,
//               paddingHorizontal: 10,
//             }}
//           >
//             <MaterialIcons name="password" size={24} color="black" />

//             <TextInput
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               style={{
//                 color: "grey",
//                 marginVertical: 7,
//                 width: 240,
//                 fontSize: 16,
//                 marginLeft: 10,
//                 flex: 1,
//               }}
//               placeholder="Enter Password"
//               secureTextEntry={!showPassword}
//             />

//             <Pressable onPress={() => setShowPassword(!showPassword)}>
//               <MaterialCommunityIcons
//                 name={showPassword ? "eye-off" : "eye"}
//                 size={24}
//                 color="black"
//               />
//             </Pressable>
//           </View>
//         </View>

//         <View style={{ marginTop: 50 }} />

//         <Pressable
//           onPress={handleRegister}
//           style={{
//             width: 200,
//             backgroundColor: "#febe10",
//             borderRadius: 6,
//             marginLeft: "auto",
//             marginRight: "auto",
//             padding: 15,
//           }}
//         >
//           <Text
//             style={{ textAlign: "center", fontSize: 18, fontStyle: "bold" }}
//           >
//             Submit
//           </Text>
//         </Pressable>

//         <Pressable
//           onPress={() => navigation.navigate("Login")}
//           style={{ marginTop: 15 }}
//         >
//           <Text style={{ textAlign: "center" }}>
//             Already have an account ? Login
//           </Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({});

// export default Register;

import React, { useState } from "react";
import config from "../src/config.js";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain letter")
    .required("Name is required"),
  email: Yup.string()
  .email("Invalid email")
  .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${config.API_URL}/register`, values);
      Alert.alert(
        "Registration successful",
        "Please check your email for verification"
      );
      navigation.navigate("Login");
      resetForm();
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        const errorMessages = Object.values(errorData)
          .map((e) => `${e.path.toUpperCase()}: ${e.message}`)
          .join("\n");

        Alert.alert("Registration Error", errorMessages);
      } else {
        Alert.alert(
          "Error",
          error.response?.data?.message || "Something went wrong"
        );
      }
      console.log("registration failed", error);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, marginTop: 15 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
          onError={(e) => console.log("Image Load Error:", e.nativeEvent.error)}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register Your Account
          </Text>
        </View>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
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
              {/* Name Input */}
              <View style={{ marginTop: 80 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#D0D0D0",
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginTop: 30,
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="rename-box"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    placeholder="Enter Name"
                    style={{
                      color: "grey",
                      marginVertical: 7,
                      width: 300,
                      fontSize: 16,
                      marginLeft: 10,
                    }}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              {/* Email Input */}
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#D0D0D0",
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginTop: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    placeholder="Enter Email"
                    style={{
                      color: "grey",
                      marginVertical: 7,
                      width: 300,
                      fontSize: 16,
                      marginLeft: 10,
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              {/* Password Input */}
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#D0D0D0",
                    borderRadius: 5,
                    marginTop: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialIcons name="password" size={24} color="black" />
                  <TextInput
                    placeholder="Enter Password"
                    style={{
                      color: "grey",
                      marginVertical: 7,
                      width: 240,
                      fontSize: 16,
                      marginLeft: 10,
                      flex: 1,
                    }}
                    secureTextEntry={!showPassword}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <MaterialCommunityIcons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="black"
                    />
                  </Pressable>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              {/* Submit Button */}
              <View style={{ marginTop: 50 }} />
              <Pressable
                onPress={handleSubmit}
                style={{
                  width: 200,
                  backgroundColor: "#febe10",
                  borderRadius: 6,
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Text>
              </Pressable>
            </>
          )}
        </Formik>

        {/* Navigation to Login */}
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default Register;
