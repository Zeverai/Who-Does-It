// ____________________________________________________________________________| IMPORT
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import NewSessionForm from "./pages/NewSessionForm";
// ____________________________________________________________________________| STYLES
import "./css/Global.css";
// ____________________________________________________________________________| COMPONENT

const App = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/newsessionform' element={<NewSessionForm />} />
         </Routes>
      </Router>
   );
};
// ____________________________________________________________________________| EXPORT
export default App;
