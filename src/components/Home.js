import React from "react";
import Notes from "./Notes"
import AddNote from "./addNote";
const Home = (props) => {
  const {showAlert}=props;
  
const Name =localStorage.getItem('Name');
  return (
    <>
    <div className="container m-4">
    <h2>{Name} Your Notes</h2>
    <Notes showAlert={showAlert}/>
    </div>
    <AddNote showAlert={showAlert}/>
    </>
  );
};

export default Home;
