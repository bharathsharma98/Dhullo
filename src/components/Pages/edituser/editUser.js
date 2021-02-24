import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './editUser.css'
const EditUser = (props) => {
    const userInfo = useSelector((state) => state.user.customer);

    const [user, setUser] = useState({
        name: userInfo.name,
        mobile: userInfo.mobileNo,
        email:userInfo.email
    })
   
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })  
 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }
    return (
      <div className="editpage-container">
        <form>
          <p>Edit {user.name ?? user.name }</p>
          <div className="edit-form">
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              placeholder={user.name}
            />
            <input
              name="mobile"
              type="text"
              value={user.mobile}
              onChange={handleChange}
              placeholder={user.mobile}
            />
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              placeholder={user.email}
                    />
                    <button onClick={handleSubmit}> Submit</button>
          </div>
        </form>
      </div>
    );
}
export default EditUser;