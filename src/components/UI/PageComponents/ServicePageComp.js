import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TextComp from "../content/TextComponents/TextComponent";
import BoxComponent from "../content/BoxComponent/BoxComp";
import { useSelector } from "react-redux";
import "./ServicePageComp.css";
import { ServiceCard } from "../../../globaStyles/styleElements";
import BookingForm from "../content/BookingFormComponent/BookingComp";
import ServiceDetailingImg from "../../../Image/servicedetailing.png";
import ServiceSanitizationImg from "../../../Image/servicesanitization.png";
import CarWashingImg from "../../../Image/servicewashing.png";
import MainImage from "../content/ImageComponents/ImgComp";
import Washing from "../../../Image/washing.png";
import sanitization from "../../../Image/sanitization.png";
import detailing from "../../../Image/detailing.png";
const Servicepage = () => {
  const width = { matches: window.matchMedia("(min-width: 768px)").matches };
  console.log(width);
  const user = useSelector((state) => state.user);
  const [toggleState, setToggle] = useState({
    onetimeToggle: 0,
    silverToggle: 0,
    goldToggle: 0,
    platinumToggle: 0,
    sanitizationToggle: 0,
    exteriorToggle: 0,
    interiorToggle: 0,
  });
  const [mobileToggle, setMobileToggle] = useState({
    toggle: "ONETIME",
  });
  const handleToggle = (toggle) => {
    switch (toggle) {
      case "ONETIME": {
        setToggle({ onetimeToggle: !toggleState.onetimeToggle });
        break;
      }
      case "SILVER": {
        setToggle({ silverToggle: !toggleState.silverToggle });
        break;
      }
      case "GOLD": {
        setToggle({ goldToggle: !toggleState.goldToggle });
        break;
      }
      case "PLATINUM": {
        setToggle({ platinumToggle: !toggleState.platinumToggle });
        break;
      }
      case "SANITIZATION": {
        setToggle({ sanitizationToggle: !toggleState.sanitizationToggle });
        break;
      }
      case "INTERIOR": {
        setToggle({ interiorToggle: !toggleState.interiorToggle });
        break;
      }
      case "EXTERIOR": {
        setToggle({ exteriorToggle: !toggleState.exteriorToggle });
        break;
      }
      default:
        return toggleState;
    }
  };

  return (
    <div className="Servicepage-Container">
     
      {width.matches ? null : (
    
        <div
          className="services-brief"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2%",
          }}
        >
          <ServiceCard fontColor="black">
            <img src={Washing}></img>
            <a href="#washingcontainer">WASHING</a>
          </ServiceCard>
          <ServiceCard fontColor="black">
            <img src={sanitization}></img>
            <a href="#sanitizationcontainer">SANITIZATION</a>
          </ServiceCard>
          <ServiceCard fontColor="black">
            <img src={detailing}></img>
            <a href="#detailingcontainer">DETAILING</a>
          </ServiceCard>
        </div>
         
      )}
    
      <h1 className="serviceHeader" id="washingcontainer">
        WASHING
      </h1>

      <div className="washingcontainer">
        <TextComp />
        <MainImage type={CarWashingImg} />
      </div>
      {width.matches ? (
        <div className="serviceboxcontainer desktop">
          <BoxComponent
            category={"ONETIME"}
            text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
            togglePress={handleToggle}
          />

          <BoxComponent
            category={"SILVER"}
            text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
            togglePress={handleToggle}
          />

          <BoxComponent
            category={"GOLD"}
            text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
            togglePress={handleToggle}
          />

          <BoxComponent
            category={"PLATINUM"}
            text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
            togglePress={handleToggle}
          />
          {toggleState.platinumToggle ? (
            <BookingForm
              category="PLATINUM"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.onetimeToggle ? (
            <BookingForm
              category="ONETIME"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.goldToggle ? (
            <BookingForm
              category="GOLD"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.silverToggle ? (
            <BookingForm
              category="SILVER"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
        </div>
      ) : (
        <div className="serviceboxcontainer mobile">
          <hr></hr>
          <div className="mobileToggle-Buttons">
            <button onClick={() => setMobileToggle({ toggle: "ONETIME" })}>
              ONETIME
            </button>
            <button onClick={() => setMobileToggle({ toggle: "SILVER" })}>
              SILVER
            </button>
            <button onClick={() => setMobileToggle({ toggle: "GOLD" })}>
              GOLD
            </button>
            <button onClick={() => setMobileToggle({ toggle: "PLATINUM" })}>
              PLATINUM
            </button>
          </div>
          <hr></hr>
          {mobileToggle.toggle === "ONETIME" ? (
            <div>
              <BoxComponent
                category={"ONETIME"}
                text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
                togglePress={handleToggle}
              />
              {toggleState.onetimeToggle ? (
                <BookingForm
                  category="ONETIME"
                  cars={user.cars}
                  togglePress={handleToggle}
                />
              ) : null}
            </div>
          ) : null}
          {mobileToggle.toggle === "SILVER" ? (
            <div>
              <BoxComponent
                category={"SILVER"}
                text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
                togglePress={handleToggle}
              />
              {toggleState.silverToggle ? (
                <BookingForm
                  category="SILVER"
                  cars={user.cars}
                  togglePress={handleToggle}
                />
              ) : null}
            </div>
          ) : null}
          {mobileToggle.toggle === "GOLD" ? (
            <div>
              <BoxComponent
                category={"GOLD"}
                text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
                togglePress={handleToggle}
              />
              {toggleState.goldToggle ? (
                <BookingForm
                  category="GOLD"
                  cars={user.cars}
                  togglePress={handleToggle}
                />
              ) : null}
            </div>
          ) : null}
          {mobileToggle.toggle === "PLATINUM" ? (
            <div>
              <BoxComponent
                category={"PLATINUM"}
                text="It is a long established
         fact that a reader will be
         distracted by the readable 
         content of a page when looking
         at its layout. The point of using
         Lorem Ipsum is that t has
         a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,
         content here', making it look like readable 
         English. Many desktop publishing packages and
         web page editors"
                togglePress={handleToggle}
              />
              {toggleState.platinumToggle ? (
                <BookingForm
                  category="PLATINUM"
                  cars={user.cars}
                  togglePress={handleToggle}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      )}

      <div className="sanitRow" id="sanitizationcontainer">
        <div>
          <h1 className="serviceHeader">SANITIZATION</h1>
        </div>
        <div className="sanitizationcontainer">
          <MainImage type={ServiceSanitizationImg} />
          <TextComp />
        </div>
        <div className="sanitbtncontainer">
          <button
            onClick={() => {
              handleToggle("SANITIZATION");
            }}
          >
            BOOK
          </button>
        </div>
        {toggleState.sanitizationToggle ? (
          <BookingForm
            category="SANITIZATION"
            cars={user.cars}
            togglePress={handleToggle}
          />
        ) : null}
      </div>

      <h1 className="serviceHeader" id="detailingcontainer">
        DETAILING
      </h1>

      <div className="washingcontainer">
        <TextComp />
        <MainImage type={ServiceDetailingImg} />
      </div>
      <div className="sanitRow">
        <div>
          <h1 className="serviceHeader">INTERIOR DETAILING</h1>
        </div>
        <div className="sanitizationcontainer">
          <MainImage type={ServiceDetailingImg} />
          <TextComp />
        </div>
        <div className="sanitbtncontainer">
          <button
            onClick={() => {
              handleToggle("INTERIOR");
            }}
          >
            BOOK
          </button>
        </div>
        {toggleState.interiorToggle ? (
          <BookingForm
            category="INTERIOR"
            cars={user.cars}
            togglePress={handleToggle}
          />
        ) : null}
      </div>
      <div className="sanitRow">
        <div>
          <h1 className="serviceHeader">EXTERIOR DETAILING</h1>
        </div>
        <div className="sanitizationcontainer">
          <MainImage type={ServiceDetailingImg} />
          <TextComp />
        </div>
        <div className="sanitbtncontainer">
          <button
            onClick={() => {
              handleToggle("EXTERIOR");
            }}
          >
            BOOK
          </button>
        </div>
        {toggleState.exteriorToggle ? (
          <BookingForm
            category="EXTERIOR"
            cars={user.cars}
            togglePress={handleToggle}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Servicepage;
