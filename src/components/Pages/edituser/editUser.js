import React, { useState ,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {editUser} from '../../../Redux/UserRedux/UserActions'
import './editUser.css';
import history from '../../../history/history'
import {baseUrl} from '../../../variables/variables'
const EditUser = (props) => {

    useEffect(() => {
      document.body.scrollTop = 0;
     
    }, []);
  const dispacth = useDispatch();
    const userInfo = useSelector((state) => state.user.customer);
console.log(userInfo)
    const [user, setUser] = useState({
        name: userInfo.name,
        mobile: userInfo.mobileNo,
        email:userInfo.email
    })
  var newUser = null;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })  
      newUser = user
      console.log(userInfo.id)
  }

    const handleSubmit = async(e) => {
        e.preventDefault();
       console.log(user)
      const updatedUser = await fetch(
        `${baseUrl.toString()}users/${userInfo.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            mobileNo: user.mobile,
            email: user.email,
          }),
        }
      ).then((t) => t.json());
    await dispacth(editUser(updatedUser.customer))
    await history.goBack()
     
    }
    return (
      <div className="editpage-container">
        <form>
          <h1>Personal Details</h1>
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
            <div className="buttonContainer">
              <button
                onClick={handleSubmit}
                // disabled={
                //   userInfo.name === user.name &&
                //   userInfo.mobileNo === user.mobile &&
                //   userInfo.email === user.email
                //     ? true
                //     : false
                // }
                className={
                  userInfo.name === user.name &&
                  userInfo.mobileNo.toString() === user.mobile.toString() &&
                  userInfo.email === user.email
                    ? "noEdit"
                    : "Edit"
                }
              >
                OK
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}
export default EditUser;