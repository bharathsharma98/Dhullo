import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import SignIn from "../signIn/signIn";
import SignInUPComponent from "../../Pages/signIn/signIn";
// import ServicePageComp from '../../UI/PageComponents/ServicePageComp'
import AddCarComponent from "../../UI/content/addcarcomponent/addcarcomponent";
 
function AddCar() {
   useEffect(() => {
     document.body.scrollTop = 0;
   }, []);
    const [signinToggle, setSignInTogggle] = useState(true);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  // const cars = useSelector((state) => state.user.cars);
  return (
    <div>
      {isSignedIn ? (
        <AddCarComponent />
      ) : (
          <div>
            {
              signinToggle ?
                <SignInUPComponent
            togglepress={() => {
              setSignInTogggle(false);
            }}
          /> : null
            }
          
        </div>
      )}
    </div>
  );
}
export default AddCar;
