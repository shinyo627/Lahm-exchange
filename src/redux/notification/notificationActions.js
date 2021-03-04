import NotificationActionTypes from './notificationTypes';
import { v4 as uuidv4 } from 'uuid';

// To dispatch more action.type from this action creator using thunk
export const setNotification = (msg, notificationType, timeout = 5000) => (
  dispatch
) => {
  const id = uuidv4();

  dispatch({
    type: NotificationActionTypes.SET_NOTIFICATION,
    payload: { msg, notificationType, id },
  });

  setTimeout(() => {
    dispatch({
      type: NotificationActionTypes.REMOVE_NOTIFICATION,
      payload: id,
    });
  }, timeout);
};
