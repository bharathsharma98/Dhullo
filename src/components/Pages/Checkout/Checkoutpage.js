import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../signIn/signIn';

import CheckoutComponent from '../../UI/content/checkoutComponent/checkoutComponent'
function CheckoutPage() {
    const isSignedIn = useSelector((state) => state.user.UserSignedIn);
    return (
        <div>
            {
            isSignedIn ?
                    (<CheckoutComponent/>) :
                    <div>
                      
                      <CheckoutComponent />
                    </div>
                 
            
        }
    </div>
        
    )
}
export default CheckoutPage;