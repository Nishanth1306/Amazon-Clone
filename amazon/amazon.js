import axios from 'axios';

const API_KEY = '6f03c24abbmshc4253518007c66fp1cf467jsn42636c27edfa';

export const fetchAmazonProducts = async (query = 'Phone') => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      query,
      page: '1',
      country: 'US',
      sort_by: 'RELEVANCE',
      product_condition: 'ALL',
      is_prime: 'false',
      deals_and_discounts: 'NONE',
    },
    headers: {
      'x-rapidapi-key': '6f03c24abbmshc4253518007c66fp1cf467jsn42636c27edfa',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
