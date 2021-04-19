import  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  isLogged,
 
} from "../../../Redux/UserRedux/UserActions";
import { setMyError,resetMyError } from "../../../Redux/Error/errorActions";
import {baseUrl} from '../../../variables/variables'
const useForm = (callback, Validate) => {
 
  const [Item, setItem] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [isSubmitting, SetisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target; //destructured here
    setItem({ ...Item, [name]: value });
  };
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();

    setError(Validate(Item));
    SetisSubmitting(true);

    try {
      const response = await fetch(`${baseUrl.toString()}users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNo: Item.phone,
          password: Item.password,
        }),
      });

      const responseData = await response.json();

      console.log(responseData);
// removed later
 
      responseData.customer !== undefined
        ? dispatch(isLogged(responseData.customer)) && alert("Logged In")
        : dispatch(setMyError(responseData));
      setTimeout(() => {
        dispatch(resetMyError());
      }, 10000);
    } catch (err) {
      console.log(err);
      dispatch(setMyError(err));
      setTimeout(() => {
        dispatch(resetMyError())
      },10000)
    }
  }
  //dispatch prevebent with recieved array from backend

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      
      callback();
     
    }
     
  }, [error, callback, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    Item,
    error,
  };
};
export default useForm;
