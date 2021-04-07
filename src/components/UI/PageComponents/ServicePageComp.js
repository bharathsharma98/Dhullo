import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TextComp from "../content/TextComponents/TextComponent";
import BoxComponent from "../content/BoxComponent/BoxComp";
import { useSelector } from "react-redux";
import "./ServicePageComp.css";
import { ServiceCard } from "../../../globaStyles/styleElements";
import BookingForm  from "../content/BookingFormComponent/BookingComp";
import detailingTop from "../../../Image/detailingTop.png";
import interior_detailing from "../../../Image/Interior_big.png";
import exterior_detailing from "../../../Image/Exterior_big.png";
import ServiceSanitizationImg from "../../../Image/servicesanitization.png";
import CarWashingImg from "../../../Image/servicewashing.png";
import MainImage from "../content/ImageComponents/ImgComp";
import Washing from "../../../Image/washing.png";
import sanitization from "../../../Image/sanitization.png";
import detailing from "../../../Image/detailing.png";
const Servicepage = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
  }, []);
  const width = { matches: window.matchMedia("(min-width: 768px)").matches };
  console.log(width);
  const user = useSelector((state) => state.user.customer);
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
       console.log(toggle);
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
            <img src={Washing} alt={Washing}></img>
            <a href="#washingcontainer">WASHING</a>
          </ServiceCard>
          <ServiceCard fontColor="black">
            <img src={sanitization} alt={sanitization}></img>
            <a href="#sanitizationcontainer">SANITIZATION</a>
          </ServiceCard>
          <ServiceCard fontColor="black">
            <img src={detailing} alt={detailing}></img>
            <a href="#detailingcontainer">DETAILING</a>
          </ServiceCard>
        </div>
      )}
      <div className="serviceHeaderH2  ">
        <h1 id="washingcontainer">WASHING</h1>
      </div>

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
              click={props.click}
              category="PLATINUM"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.onetimeToggle ? (
            <BookingForm
              click={props.click}
              category="ONETIME"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.goldToggle ? (
            <BookingForm
              click={props.click}
              category="GOLD"
              cars={user.cars}
              togglePress={handleToggle}
            />
          ) : null}
          {toggleState.silverToggle ? (
            <BookingForm
              click={props.click}
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
                  click={props.click}
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
                  click={props.click}
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
                  click={props.click}
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
                  click={props.click}
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
        <div className="serviceHeaderH3">
          <h1> SANITIZATION</h1>
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
            click={props.click}
            category="SANITIZATION"
            cars={user.cars}
            togglePress={handleToggle}
          />
        ) : null}
      </div>
      <div className="sanitrow">
        <div className="serviceHeaderH4">
          <h1 id="detailingcontainer">DETAILING</h1>
        </div>
        <div className="washingcontainer">
          <TextComp
            paragraph="Our car detailing services are focused on removing the invisible
dirt that sticks on to your car&#39;s body. Thus, ensuring a brand-new glossy
finish, also called as showroom finish. This work does not end here; our car
care service delivers shiny exteriors, crystal clean windows, and maintains
the car's hygiene."
          />
          <MainImage type={detailingTop} />
        </div>
      </div>

      <div className="sanitRow InteriorDEt">
        <div className="serviceHeaderH5">
          <h1>INTERIOR DETAILING</h1>
        </div>
        {/* <div className="embbededVideoInterior">
          <video width="400" height="240" controls autoPlay muted>
            <source
              src="https://youtu.be/nGZbqT4lb_g"
              type="video/mp4"
            ></source>
          </video>
        </div> */}
        <div className="sanitizationcontainer">
          <MainImage type={interior_detailing} />
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
            click={props.click}
            category="INTERIOR"
            cars={user.cars}
            togglePress={handleToggle}
          />
        ) : null}
      </div>
      <div className="sanitRow">
        <div className="serviceHeaderH5">
          <h1>EXTERIOR DETAILING</h1>
        </div>
        <div className="sanitizationcontainer">
          <MainImage type={exterior_detailing} />
          <TextComp
            paragraph="Exterior detailing involves cleaning, and either restoring
or exceeding the original condition of the surface of the car&#39;s finish (usually
a paint with a glossy finish), chrome trim, windows, wheels, and tires, as
well as other visible components on a vehicle's exterior."
          />
        </div>
        <div className="sanitbtncontainer ">
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
            click={props.click}
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
