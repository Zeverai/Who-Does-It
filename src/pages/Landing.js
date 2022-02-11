// ____________________________________________________________________________| IMPORTS
import React from "react";

// ____________________________________________________________________________| STYLES
import "../css/Landing.css";
// ____________________________________________________________________________| COMPONENT
const Landing = () => {
   return (
      <div className='landing-container'>
         <h1 className='landing-title'>Landing Page</h1>
         <p className='landing-description'>
            Are you tired of catching flak for assigning roles?{" "}
         </p>
         <p>Are your minions pissed off and ready to mutiny?</p>
         <p> Let us make descisions for you!</p>
      </div>
   );
};
// ____________________________________________________________________________| EXPORT
export default Landing;
