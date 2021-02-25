import   { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  isLogged,
  addCar,
  addOrder,
} from "../../../Redux/UserRedux/UserActions";

const useForm = (callback, Validate) => {
  // const cars = useSelector((state) => state.user.cars);

  const [Item, setItem] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState({});
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
      const response = await fetch("http://localhost:5000/api/users/login", {
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

      if (responseData.customer.cars.length) {
        responseData.customer.cars.map((carId) =>
          fetch(`http://localhost:5000/api/cars/${carId}`)
            .then((response) => response.json())
            .then((onecar) => dispatch(addCar(onecar.car)))
            .then((onecar) => {
              onecar.payload.orders.map((orderId) =>
                fetch(`http://localhost:5000/api/orders/${orderId}`)
                  .then((response) => response.json())
                  .then((order) => {
                    console.log(order);
                    dispatch(addOrder(order));
                  })
              );
            })
            .then((onecar) => console.log(onecar))
        );
      }

      responseData.customer.id
        ? dispatch(isLogged(responseData.customer))
        : console.log("not logged in");
    } catch (err) {
      console.log(err)
      err 
        ? alert("INVALID CREDENTIALS")
        : alert("logged in");
 
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