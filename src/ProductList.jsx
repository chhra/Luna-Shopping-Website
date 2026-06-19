import { useProductsContext } from "./contexts/ProductsContext.jsx";

function ProductList() {
  const { products, addToCart, isInCart } = useProductsContext();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>DA{product.price}</p>
          <button onClick={() => addToCart(product)}>
            {isInCart(product) ? "In Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
