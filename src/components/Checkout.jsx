import React, { useMemo, useState, useEffect } from "react";
import coupons from "../api/coupons.json";
import "./Checkout.css";

const Checkout = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  let originalPrice = useMemo(
    () =>
      cartItems.reduce((total, itemPrice) => {
        return (
          total + Number(itemPrice.pricePerMonth) * Number(itemPrice.count)
        );
      }, 0),
    [cartItems]
  );

  useEffect(() => setTotalPrice(originalPrice), [originalPrice]);

  function couponButtonHandler(couponCode) {
    coupons.forEach((coupon) => {
      if (coupon.promoCode === couponCode && totalPrice >= coupon.minVal) {
        setTotalPrice(
          originalPrice - (coupon.discountPercent * originalPrice) / 100
        );
      }
    });
  }

  return (
    <div className="checkout-cart-container">
      <div>
        <strong>Products</strong>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              {item.count} x {item.name}
            </div>
          );
        })}
      </div>
      <div>
        <b>Total:</b> ${totalPrice}
      </div>
      <div className="coupons-container">
        {coupons.map((coupon) => {
          return (
            <div className="coupon" key={coupon.promoCode}>
              <span>{coupon.desc}</span>
              <button onClick={() => couponButtonHandler(coupon.promoCode)}>
                Apply
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
