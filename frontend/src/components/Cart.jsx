// styles
import "./Cart.css";

//imports
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const totalPrice = (products) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  return total;
};

export default function Cart({ products, setIsCartOpen }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      {products.length == 0 && (
        <p className="cart-empty">
          cart <span>Empty</span>
        </p>
      )}
      {products.length > 0 && (
        <>
          <div className="cart-heading">
            <strong>cart ({products.length})</strong>
            <button onClick={() => dispatch(emptyCart())}>Remove all</button>
          </div>
          <div className="cart-items flow">
            {products.map((product) => (
              <div key={product.id}>
                <div className="cart-item-image">
                  <img
                    width={"50px"}
                    src={product.imageURL}
                    alt="cart-item-image"
                  />
                </div>
                <div className="content">
                  <strong>{product.name}</strong>
                  <strong>$ {product.price}</strong>
                </div>
                <div className="quantity-counter">
                  <button
                    onClick={() => dispatch(removeFromCart({ id: product.id }))}
                  >
                    -
                  </button>
                  <small>{product.quantity}</small>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart(
                          product.id,
                          product.name,
                          1,
                          product.price,
                          product.imageURL
                        )
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <small>total</small>
            <strong>$ {totalPrice(products)}</strong>
          </div>
          <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
            <button className="checkout-button">checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}
