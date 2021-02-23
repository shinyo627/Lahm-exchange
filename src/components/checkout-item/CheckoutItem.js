import React from 'react';

import './CheckoutItemStyle.scss';
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span classname='name'>{name}</span>
      <span classname='quantity'>{quantity}</span>
      <span classname='price'>{price}</span>
      <div classname='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
