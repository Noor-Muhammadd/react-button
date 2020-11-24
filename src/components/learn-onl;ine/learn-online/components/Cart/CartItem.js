import React from 'react';

const CartItem = (props) => {
  // Get property from item, receive as props from App.js
  const { title, current_price } = props.item;
  return (
    // Show title and current price of the course added in cart
    <li className='list-group-item d-flex my-1 px-3 border-bottom justify-content-between'>
      <span>{title}</span> <span> ${current_price}</span>
    </li>
  );
};

export default CartItem;
