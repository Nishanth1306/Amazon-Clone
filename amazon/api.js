import { fetchAmazonProducts } from "./amazon";

useEffect(() => {
  const loadProducts = async () => {
    const fetchedProducts = await fetchAmazonProducts('Phone'); 
    setProducts(fetchedProducts);
  };

  loadProducts();
}, []);
