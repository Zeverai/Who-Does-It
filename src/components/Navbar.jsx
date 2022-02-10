// ____________________________________________________________________________| IMPORTS
import React, { Fragment } from "react";
// ____________________________________________________________________________| STYLES
import "../css/Navbar.css";
// ____________________________________________________________________________| COMPONENT
const Navbar = () => {
   return (
      <Fragment>
         <div className='nav-container'>
            <h1>Who Does It</h1>
            <div>Button 1</div>
            <div>Button 2</div>
         </div>
      </Fragment>
   );
};

export default Navbar;
