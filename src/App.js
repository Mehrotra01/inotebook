import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <Router> */}
        <NavBar />
        <Home/>
          {/* <Route exact path="/about">
         <> <About /></>
          </Route>
          </Routes>
        </Router> */}
    </>
  );
}

export default App;
