import React from "react";
import './Confirmation.css'
export const Confirmationpage = () => {
    return <div className="confirmationPageContainer">
        {
            true ?
                <div>success</div>
                :
                <div>Fail</div>
      }
  </div>;
};
