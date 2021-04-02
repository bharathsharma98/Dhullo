import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import SignIn from "../signIn/signIn";
import SignInUPComponent from "../../Pages/signIn/signIn";
// import ServicePageComp from '../../UI/PageComponents/ServicePageComp'
import AddCarComponent from "../../UI/content/addcarcomponent/addcarcomponent";
 const width = { matches: window.matchMedia("(min-width: 768px)").matches };
function AddCar(props) {
   useEffect(() => {
    document.body.scrollTop = 0;
    !width.matches ? props.click() : (document.body.scrollTop = 0);
   }, []);
    const [signinToggle, setSignInTogggle] = useState(true);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  // const cars = useSelector((state) => state.user.cars);
  return (
    <div>
      {isSignedIn ? (
        <AddCarComponent click={props.location.click} />
      ) : (
        <div>
          {signinToggle ? (
            <SignInUPComponent
              click={props.location.click}
              togglepress={() => {
                setSignInTogggle(false);
              }}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
export default AddCar;
