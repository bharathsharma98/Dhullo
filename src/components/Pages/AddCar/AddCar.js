import React from "react";
import { useSelector } from "react-redux";
import SignIn from "../signIn/signIn";
// import ServicePageComp from '../../UI/PageComponents/ServicePageComp'
import AddCarComponent from "../../UI/content/addcarcomponent/addcarcomponent";
 
function AddCar( ) {
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  // const cars = useSelector((state) => state.user.cars);
  return (
    <div>
      {isSignedIn   ? (
        <AddCarComponent />
      ) : (
        <div>
          <SignIn />
         
          
        </div>
      )}
    </div>
  );
}
export default AddCar;
