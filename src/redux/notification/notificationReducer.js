import NotificationActionTypes from './notificationTypes';

const INITIAL_STATE = [];

const notificationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case NotificationActionTypes.SET_NOTIFICATION:
      return [...state, payload];
    case NotificationActionTypes.REMOVE_NOTIFICATION:
      return state.filter((notification) => notification.id !== payload);
    default:
      return state;
  }
};

export default notificationReducer;
