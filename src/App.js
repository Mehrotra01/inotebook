// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/noteState";

function App() {
  return (
    <>
      <NoteState>
        <NavBar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
