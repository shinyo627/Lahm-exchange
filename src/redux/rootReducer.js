import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// The storage is referencing the actual localStorage on web browser
import storage from 'redux-persist/lib/storage';

import notificationReducer from './notification/notificationReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  // String name of the reducer obj cart
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  notification: notificationReducer,
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
