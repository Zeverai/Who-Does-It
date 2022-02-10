import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route exact path='/' element={<Landing />} />
         </Routes>
      </Router>
   );
};

export default App;
