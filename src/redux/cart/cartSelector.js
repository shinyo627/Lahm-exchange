import { createSelector } from 'reselect';

// Input selector
// Selector convention is that it usually returns a one level deep slice of state.
const selectCart = (state) => state.cart;

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accPrice, cartItem) => accPrice + cartItem.price, 0)
);
