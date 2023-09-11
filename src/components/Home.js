import React from "react";
import Notes from "./Notes"
import AddNote from "./addNote";
const Home = () => {
  return (
    <>
    <div className="container m-4">
    <h2>Your Notes</h2>
    <Notes/>
    </div>
    <AddNote/>
    </>
  );
};

export default Home;
