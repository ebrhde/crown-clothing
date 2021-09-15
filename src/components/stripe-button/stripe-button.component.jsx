import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JZtLhFe8JWSX14FxlPATFJ4dicXXy61zMzREP8k9KgyIxTgZnzBGZXGz57kZDeRoAXF1zLzFV76wAYbtgE9r0nt00Tu1asQEn';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    
    return (
        <StripeCheckout 
        label="Pay Now"
        name="Crown Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;