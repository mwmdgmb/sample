import React from "react";
import { selectCartItems } from "../redux/cart/card-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const DropdownCart = ({ cartItems }) => {
  return (
    <div className="cart_dropdown">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <div key={cartItem.id}>
            <p className="text-info">{cartItem.employee_name}</p>
            <div className="dirc-ltr">
              <span>{cartItem.quantity}</span> x{" "}
              <span>{cartItem.employee_salary} </span>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>سبد خالی میباشد</p>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(DropdownCart);
