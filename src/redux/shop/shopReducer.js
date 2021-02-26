import SHOP_DATA from './shopData';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
