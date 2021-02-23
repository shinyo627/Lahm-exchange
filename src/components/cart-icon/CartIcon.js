import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIconStyle.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  // console.log('I am being called');
  // BELOW IS BAD EXAMPLE
  // return {
  //   // itemCount is a defined selector just to get a slice of whole state
  //   itemCount: cartItems.reduce(
  //     (accQuantity, cartItem) => accQuantity + cartItem.quantity,
  //     0
  //   ),
  // };

  // Right Way to save performance from expensive/repetitive computations.
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
