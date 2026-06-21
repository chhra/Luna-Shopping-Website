import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // fetch real products from your backend when the app first loads
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []); // empty array = run once on mount

  const isInCart = (product) => {
    return cart.find((e) => e._id === product._id);
  };

  const addToCart = (product) => {
    if (isInCart(product)) return; // already in cart, do nothing
    setCart([...cart, product]); // just add it (no count needed)
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((e) => e._id !== product._id)); // remove it
  };
  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    isInCart,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContextProvider;
