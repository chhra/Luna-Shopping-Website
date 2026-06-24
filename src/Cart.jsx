import { useProductsContext } from "./contexts/ProductsContext.jsx"; // adjust path

function Cart() {
  const { cart, removeFromCart } = useProductsContext();
  console.log("CART PAGE SEES:", cart); // ← add this

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>
          <p>DA{item.price}</p>

          <button className="remove-btn" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        </div>
      ))}
      <h3 className="cart-total">Total: DA{total}</h3>
    </div>
  );
}
export default Cart;
