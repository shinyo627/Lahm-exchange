import { createSelector } from 'reselect';

// Input selector
// Selector convention is that it usually returns a one level deep slice of state.
const selectCart = (state) => state.cart;

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);
