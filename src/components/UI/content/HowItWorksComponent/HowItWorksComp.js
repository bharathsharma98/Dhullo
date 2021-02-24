import React from "react";
import "./HowItWorksComp.css";
import relax from "../../../../Image/relax.png";
import agent from "../../../../Image/agent.png";
import bookservice from "../../../../Image/bookservice.png";
import selectservice from "../../../../Image/selectservice.png";
 
const HowItWorks = () => {
  return (
    <section class="ps-timeline-sec">
      <div class="container">
        <h1>How It Works</h1>
        <ol class="ps-timeline">
          <li>
            <div class="img-handler-top">
              <img
                src={
                  selectservice
                }
                alt=""
              />
            </div>
            <div class="ps-bot">
              <p>Select Our Service</p>
            </div>
            <span class="ps-sp-top">01</span>
          </li>
          <li>
            <div class="img-handler-bot">
              <img
                src={
                  bookservice
                }
                alt=""
              />
            </div>
            <div class="ps-top">
              <p>
               Book An Appointment
              </p>
            </div>
            <span class="ps-sp-bot">02</span>
          </li>
          <li>
            <div class="img-handler-top">
              <img
                src= {agent}
                alt=""
              />
            </div>
            <div class="ps-bot">
              <p>
               Agent Will Reach You
              </p>
            </div>
            <span class="ps-sp-top"  >03</span>
          </li>
          <li>
            <div class="img-handler-bot">
              <img height='50%'
                src={
                  relax
                }
                alt=""
              />
            </div>
            <div class="ps-top">
              <p>Relax Your Car Is being Cleaned</p>
            </div>
            <span class="ps-sp-bot">04</span>
          </li>
        </ol>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </section>
  );
};
export default HowItWorks;
