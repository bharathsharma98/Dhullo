import React from "react";
import useForm from "./useForm";
import Validate from './validateSignup'
const SignUp = () => {
  const { Item, handleChange, handleSubmit,error } = useForm(submit,Validate);

  function submit() {
    console.log("success");
  }
  return (
    <div className="signupcontainer">
      <form noValidate onSubmit={handleSubmit}>
      <div>
          <label>FirstName</label>
          <div>
            <input
              name="name"
              type="text"
              value={Item.name}
              onChange={handleChange}
            />
            {error.name && <p>{error.name}</p>}
          </div>
        </div>
        <div>
          <label>email</label>
          <div>
            <input
              name="email"
              type="email"
              value={Item.email}
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
          </div>
        </div>
        <div>
          <label>Phone.No</label>
          <div>
            <input
              name="phone"
              type="text"
              value={Item.phone}
              onChange={handleChange}
            />
            {error.phone && <p>{error.phone}</p>}
          </div>
        </div>
        <div>
          <label>password</label>
          <div>
            <input
              name="password"
              type="password"
              value={Item.password}
              onChange={handleChange}
            />
            {error.password && <p>{error.password}</p>}
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
export default SignUp;
