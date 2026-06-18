import { createContext, useContext, useState } from "react";

const ProductsContext = createContext(null);

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const isInCart = (product) => {
    return cart.find((e) => e.id === product.id);
  };

  const addToCart = (product) => {
    const cartProduct = cart.find((e) => e.id === product.id);
    if (cartProduct) {
      cartProduct.count++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const cartProduct = cart.find((e) => e.id === product.id);
    if (cartProduct) {
      if (cartProduct.count === 1) {
        setCart(cart.filter((e) => e.id !== product.id));
      } else {
        cartProduct.count--;
        setCart([...cart]);
      }
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
