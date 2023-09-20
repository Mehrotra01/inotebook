// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/noteState";
import Login from "./components/login"
import Signup from "./components/signUp.js"
import Alert from "./components/alert";
import AddNote from "./components/addNote";
import { useState } from "react";

function App() {
const [alert, setAlert] = useState(null);

const showAlert=(mesaage,type)=>{
  setAlert({msg:mesaage,type:type})
  setTimeout(() => {
    setAlert(null);
  }, 1500);

}
  return (
    <div >
      <NoteState >
          
        <NavBar />
        <div className="container ">
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/addNote" element={<AddNote showAlert={showAlert}/>} />
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
        </Routes>
        
        </div>
      </NoteState>
    </div>
  );
}

export default App;
