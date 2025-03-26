import React, { useState } from "react";
import config from '../src/config.js';
import { Platform } from "react-native";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Pressable,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import axios from 'axios';


// const API_URL = Platform.OS === 'android' 
//     ? "http://10.0.2.2:3000"       
//     : "http://127.0.0.1:3000";  

const PORT = "192.168.0.105";
const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // const navigation = useNavigation();


    const handleRegister = () => {
        const user = {
          name: name,
          email: email,
          password: password,
        };
    
        axios
          .post(`http://${PORT}:3000/register`, user)
          .then((response) => {;
            Alert.alert(
              "Registration successful",
              "You have been registered Successfully"
            );
            navigation.navigate("Login");
            setName("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            Alert.alert(
              "Registration Error",
              "An error occurred while registering"
            );
            console.log("registration failed", error);
          });
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


                <View style={{ marginTop: 80 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30,
                        }}
                    >


                        <MaterialCommunityIcons style={{marginLeft:10}}name="rename-box" size={24} color="black" />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{
                                color: "grey",
                                marginVertical: 7,
                                width: 300,
                                fontSize: name ? 16 : 16,
                            }}
                            placeholder="Enter Name"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 10,
                        }}
                    >
                        <MaterialCommunityIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="black"
                        />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color: "grey",
                                marginVertical: 7,
                                width: 300,
                                fontSize: email ? 16 : 16,
                            }}
                            placeholder="Enter Email"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 10,
                        }}
                    >
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="password"
                            size={24}
                            color="black"
                        />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            style={{
                                color: "grey",
                                marginVertical: 7,
                                width: 300,
                                fontSize: password ? 16 : 16,
                            }}
                            placeholder="Enter Password"
                            secureTextEntry={true}
                        />
                    </View>
                </View>

               

                <View style={{ marginTop: 50 }} />

                <Pressable onPress={handleRegister} style={{ width: 200, backgroundColor: "#febe10", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>

                    <Text style={{ textAlign: "center", fontSize: 18, fontStyle: "bold" }}>Submit</Text>
                </Pressable>


                <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}>

                    <Text style={{ textAlign: "center" }}>
                        Already have an account ? Login
                    </Text>
                </Pressable>
                
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});


export default Register;
