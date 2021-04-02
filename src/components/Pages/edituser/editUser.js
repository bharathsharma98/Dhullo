import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux';
import './editUser.css'
const EditUser = (props) => {

    useEffect(() => {
      document.body.scrollTop = 0;
     
    }, []);
    const userInfo = useSelector((state) => state.user.customer);

    const [user, setUser] = useState({
        name: userInfo.name,
        mobile: userInfo.mobileNo,
        email:userInfo.email
    })
  var newUser = null;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })  
      newUser = user
      console.log(newUser)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }
    return (
      <div className="editpage-container">
        <form>
          <p>Edit {user.name ?? user.name}</p>
          <div className="edit-form">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              placeholder={user.name}
            />

            <label>Phone:</label>
            <input
              name="mobile"
              type="text"
              value={user.mobile}
              onChange={handleChange}
              placeholder={user.mobile}
            />

            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              placeholder={user.email}
            />

            <button
              onClick={handleSubmit}
               
              className={
                userInfo.name === user.name &&
                userInfo.mobileNo === user.mobile &&
                userInfo.email === user.email
                  ? 'noEdit'
                  : 'Edit'
              }
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    );
}
export default EditUser;