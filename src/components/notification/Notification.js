import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cartSelector';

import './NotificationStyle.scss';

const Notification = ({ notifications, itemCount }) =>
  notifications !== null &&
  notifications.length > 0 &&
  notifications.map((notification) => (
    <div
      key={notification.id}
      className={`notification notification-${notification.notificationType}`}
    >
      {notification.msg} {itemCount && ` || ${itemCount} items in your basket.`}
    </div>
  ));

const mapStateToProps = (state) => ({
  notifications: state.notification,
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(Notification);
