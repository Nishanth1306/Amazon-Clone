import React, { useCallback, useContext, useEffect, useRef } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Platform,
  Pressable,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
 
 
  list,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { UserType } from "../UserContext";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { jwtDecode } from "jwt-decode";
import { fetchAmazonProducts } from "../amazon/amazon.js";
import config from "../src/config.js";
import ImageSlider from "../components/ImageSlider.js";
import AddressModal from "../components/AddressModal.js";
import Categories from "../components/Categories.js";
import TrendingDeals from "../components/TrendingDeals.js";
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const { width } = useWindowDimensions();
  const [Products, setProducts] = useState([]);
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("jewelry");
  const [items, setItems] = useState([
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
    { label: "Women's clothing", value: "women's clothing" },
  ]);
  useEffect(() => {
    if (userId) {
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
      </Pressable>;
      fetchAddresses();
    }
  }, [userId, modalVisible]);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(`${config.API_URL}/addresses/${userId}`);
      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await axios.get("https://fakestoreapi.com/products");
        setProducts(responce.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const [aproducts, setaProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Phone"); // default

  useEffect(() => {
    const loadProducts = async () => {
      const fetched = await fetchAmazonProducts(selectedCategory);
      setProducts(fetched);
    };

    loadProducts();
  }, [selectedCategory]);

  // const handleCategoryPress = (categoryName) => {
  //   setSelectedCategory(categoryName);
  // };

 
  

  const offers = [
    {
      id: "0",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      id: "1",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      id: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      id: "3",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
  ];

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      console.log("token", token);
      const decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.searchBar}>
            <Pressable style={styles.searchInput}>
              <AntDesign name="search1" size={24} color="black" />
              <TextInput placeholder="Search" style={styles.input} />
            </Pressable>
            <Entypo name="mic" size={24} color="black" />
          </View>

          <AddressModal
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            addresses={addresses}
            navigation={navigation}
          />
          
          <Categories/>


          <ImageSlider />

          <TrendingDeals/>



          
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            Today's Deals
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("Info", {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })
                }
                style={{
                  marginVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                />

                <View
                  style={{
                    backgroundColor: "#E31837",
                    paddingVertical: 5,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>

          <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
              width: "45%",
              marginBottom: open ? 50 : 15,
            }}
          >
            <DropDownPicker
              style={{
                borderColor: "#B7B7B7",
                height: 30,
                marginBottom: open ? 120 : 15,
              }}
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder="Choose Category"
              placeholderStyle={styles.placeholderStyles}
              onOpen={onGenderOpen}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {Products?.filter((item) => item.category === category).map(
              (item, index) => (
                <ProductItem item={item} key={index} />
              )
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  input: {
    flex: 1,
    fontSize: 16,
  },

  
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  carouselImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default Home;
