import { useProductsContext } from "./contexts/ProductsContext.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import { div } from "framer-motion/client";
function ProductList() {
  const { products, addToCart, removeFromCart, isInCart } =
    useProductsContext();
  const { user } = useAuth();
  // only show items that are in stock
  const availableProducts = products.filter((product) => product.inStock);
  return (
    <>
      <div className="username">{user && <p>Hi, {user.username}!</p>}</div>
      <div className="product-grid">
        {availableProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>DA{product.price}</p>

            {isInCart(product) ? (
              <button onClick={() => removeFromCart(product)}>Remove</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductList;
