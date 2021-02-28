import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import {isLogged} from '../../../Redux/UserRedux/UserActions'
const useForm = (callback,Validate) => {
  const [Item, setItem] = useState({
    email: "",
    password: "",
    name: '',
    phone:''
  });
  const [error, setError] = useState(false);
const [isSubmitting, SetisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target; //destructured here
    setItem({ ...Item, [name]: value });
    
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
        
      setError(Validate(Item));
    SetisSubmitting(true);
   
    try{
      const response = await fetch('http://localhost:5000/api/users/signup',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: Item.name,
            
              mobileNo: Item.phone,
              email: Item.email,
              password: Item.password
          })
      });

      const responseData = await response.json();
      console.log(responseData);
      await  dispatch(isLogged(responseData));
       alert("Signed in");
      //dispatch item and push to add car page
  } catch (err) {
      console.log(err);
      setError(true)
  }
    };
    
    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmitting) {
            callback();
        }
    }, [error,callback,isSubmitting]);

  return {
    handleChange,
    handleSubmit,
      Item,
    error
  };
};
export default useForm;
