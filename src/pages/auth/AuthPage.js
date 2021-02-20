import React from 'react';

import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './AuthPageStyle.scss';
const AuthPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
