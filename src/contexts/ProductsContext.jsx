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
    return cart.find((e) => e.id === product.id);
  };

  const addToCart = (product) => {
    const cartProduct = cart.find((e) => e.id === product.id);
    if (cartProduct) {
      // make a new array, replacing the matching item with a NEW object
      setCart(
        cart.map((e) =>
          e.id === product.id ? { ...e, count: e.count + 1 } : e,
        ),
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const cartProduct = cart.find((e) => e.id === product.id);
    if (!cartProduct) return;

    if (cartProduct.count === 1) {
      setCart(cart.filter((e) => e.id !== product.id));
    } else {
      setCart(
        cart.map((e) =>
          e.id === product.id ? { ...e, count: e.count - 1 } : e,
        ),
      );
    }
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
