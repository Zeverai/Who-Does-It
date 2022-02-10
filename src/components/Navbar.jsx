// ____________________________________________________________________________| IMPORTS
import React, { Fragment } from "react";
// ____________________________________________________________________________| STYLES
import "../css/Navbar.css";
// ____________________________________________________________________________| COMPONENT
const Navbar = () => {
   return (
      <Fragment>
         <div className='nav-container'>
            <h1 className='nav-title'>Who Does It</h1>
            <div className='nav-button-container'>
               <div className='nav-button'>Button 1</div>
               <div className='nav-button'>Button 2</div>
            </div>
         </div>
      </Fragment>
   );
};

export default Navbar;
