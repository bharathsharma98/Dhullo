import React,{useEffect,useState} from "react";
 
import { useSelector, useDispatch } from "react-redux";
import { loginOpen } from "../../../Redux/LoginToggle/LoginActions";
   
import SignInUPComponent from "../../Pages/signIn/signIn";
// import ServicePageComp from '../../UI/PageComponents/ServicePageComp'
import AddCarComponent from "../../UI/content/addcarcomponent/addcarcomponent";
const width = { matches: window.matchMedia("(min-width: 768px)").matches };
 


function AddCar(props) {
  const LoginToggle = useSelector((state) => state.loginToggle.Toggle);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.scrollTop = 0;
    
  }, [])
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  // const cars = useSelector((state) => state.user.cars);
  return (
    <div>
      {isSignedIn ? (
        <AddCarComponent click={props.location.click} />
      ) : (
        <div>
          {LoginToggle ? (
            <SignInUPComponent
              
              
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
export default AddCar;
