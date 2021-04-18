import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLogged } from "../../../Redux/UserRedux/UserActions";
import {baseUrl} from '../../../variables/variables'
const useFormSignup = (callback, ValidateSignUp) => {
  const [ItemSingUp, setItem] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [errorSignUp, setError] = useState(false);
  const [isSubmitting, SetisSubmitting] = useState(false);
  const handleChangeUp = (e) => {
    const { name, value } = e.target; //destructured here
    setItem({ ...ItemSingUp, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmitUp = async (e) => {
    e.preventDefault();

    setError(ValidateSignUp(ItemSingUp));
    SetisSubmitting(true);

    try {
      const response = await fetch(`${baseUrl.toString()}users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: ItemSingUp.name,

          mobileNo: ItemSingUp.phone,
          email: ItemSingUp.email,
          password: ItemSingUp.password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      await dispatch(isLogged(responseData.customer));
      alert("Signed in");
      //dispatch item and push to add car page
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errorSignUp).length === 0 && isSubmitting) {
      callback();
    }
  }, [errorSignUp, callback, isSubmitting]);

  return {
    handleChangeUp,
    handleSubmitUp,
    ItemSingUp,
    errorSignUp,
  };
};
export default useFormSignup;
