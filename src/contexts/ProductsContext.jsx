import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsContextProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // fetch real products from your backend when the app first loads
  useEffect(() => {
    fetch(`${API_URL}/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []); // empty array = run once on mount
  console.log("PROVIDER RENDERED, cart is:", cart);

  const isInCart = (product) => {
    return cart.find((e) => e._id === product._id);
  };

  const addToCart = (product) => {
    if (isInCart(product)) return; // already in cart, do nothing
    console.log("ADD TO CART CALLED:", product); // ← add this
    setCart([...cart, product]); // just add it (no count needed)
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((e) => e._id !== product._id)); // remove it
  };
  const clearCart = () => {
    setCart([]);
  };
  const value = {
    products,
    setProducts,
    cart,
    addToCart,
    removeFromCart,
    isInCart,
    clearCart,
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContextProvider;
