import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middleWares = [];

// *** Redux logger will only functions when in development
if (process.env.NODE_ENV === 'development') {
  middleWares.push(ReduxThunk, logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor };
