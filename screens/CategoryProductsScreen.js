import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const CategoryProductsScreen = ({ route }) => {
  const { query } = route.params;  // <-- Receiving the search query
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search', {
          params: {
            query: query,
            page: '1',
            country: 'US',
          },
          headers: {
            'x-rapidapi-key': '6f03c24abbmshc4253518007c66fp1cf467jsn42636c27edfa',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
          }
        });

        setProducts(response.data?.data?.products || []);
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, [query]);

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.product_photo }} style={styles.productImage} />
      <Text style={styles.title}>{item.product_title}</Text>
      <Text style={styles.price}>{item.product_price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.asin}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productCard: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
  },
  productImage: {
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
});

export default CategoryProductsScreen;
