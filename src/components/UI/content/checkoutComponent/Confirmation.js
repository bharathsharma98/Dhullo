import React,{useEffect,useState} from "react";
import "./Confirmation.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import history from '../../../../history/history'
import happy from "../../../../Image/happy.svg";
import sad from "../../../../Image/sad.png";
import { emptyCart } from '../../../../Redux/cart/CartActions';
import { addOrder } from "../../../../Redux/UserRedux/UserActions";
import Loader from "react-loader-spinner";
export const Confirmationpage = (props) => {

    const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(props)
  var ordersArray = [];
  const passOrders = () => {
    props.location.orders ?
      props.location.orders.map((oneOrder) =>
        fetchUpdatedOrders(oneOrder._id)
      )
      : alert("no orders returned")
  }
  async function fetchUpdatedOrders(orderId) {
       await setLoading(true)
      const Confimed = await fetch(
        `http://localhost:5000/api/orders/dailyStatus/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());
      console.log(Confimed);
  
    await dispatch(addOrder(Confimed.order));
      await setLoading(false);
 
  }
  useEffect(() => {
    props.location.status === "success" ?
      dispatch(emptyCart()) :
      alert("payment failed")
    passOrders()
   
  
},[])

  
  
  return (
    <div className="confirmationPageContainer">
      {props.location.status === "success" ? (
        <div className="successContainer">
          <div className="imagecontainerConfirm">
            <img src={happy}></img>
          </div>
          <div className="confirmationHeader">
            <h1>Order Confirmed!!</h1>
          </div>
          <div>
            <Loader
              type="Oval"
              color="#03588c"
              height="70"
              width="70"
              visible={Loading}
              style={{
                width: "50%",
                height: "100",
                zIndex: 3000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
          <div className="confirmationMessage">
            <p>
              {" "}
              Track your order in <Link to="/myorders">My Orders</Link> page
            </p>
          </div>
          <div className="exploreMore">
            <button>
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/services" }}
              >
                <p>EXPLORE MORE SERVICES >></p>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="failureContainer">
          <div className="imagecontainerConfirm">
            <img src={sad}></img>
          </div>
          <div className="confirmationHeader">
            <h1>Payment Failed...</h1>
          </div>

          <div className="confirmationMessage">
            <p>
              We're having trouble while processing your payment. Try again.
            </p>
          </div>
          <div className="exploreMore">
            <button
              onClick={() => history.goBack()}
              style={{ color: "white", backgroundColor: "#03588C",marginTop:'1vw',width:'10rem' }}
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
