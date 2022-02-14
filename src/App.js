// ____________________________________________________________________________| IMPORT
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
// ____________________________________________________________________________| STYLES
import "./css/Global.scss";
// ____________________________________________________________________________| COMPONENT

const App = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route exact path='/' element={<Landing />} />
         </Routes>
      </Router>
   );
};
// ____________________________________________________________________________| EXPORT
export default App;
