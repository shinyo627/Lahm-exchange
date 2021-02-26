import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
  // Default money value in Stripe is in cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IP1RgGP68xr27rl2jyRultrBb27Czt4u29hfVJerXfjhmyB4OYSzfvdGWLlwqe1kNPVS3lqD9rdZEbRT0SZhBTh00nW0rX43B';

  const onToken = (token) => {
    alert('Payment Successful');
    // console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Lahm-Exchange Ltd.'
      billingAddress
      shippingAddress
      // image=''
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      // **Token prop is success callback only invoked when triggered submit
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
