// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/noteState";
import Login from "./components/login"
import Signup from "./components/signUp.js"
// import Alert from "./components/alert";

function App() {
  return (
    <>
      <NoteState>
        <NavBar />
        {/* <Alert message={"this is aazing"}/> */}
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
