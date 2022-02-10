// ____________________________________________________________________________| IMPORTS
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// ____________________________________________________________________________| STYLES
import "../css/Navbar.css";
// ____________________________________________________________________________| COMPONENT
const Navbar = () => {
   return (
      <Fragment>
         <div className='nav-container'>
            <h1 className='nav-title'>Who Does It</h1>
            <div className='nav-button-container'>
               <Link to='/new' className='nav-button'>
                  New Session
               </Link>
               <Link to='/about' className='nav-button'>
                  About
               </Link>{" "}
            </div>
         </div>
      </Fragment>
   );
};

export default Navbar;
