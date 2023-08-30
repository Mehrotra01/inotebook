import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const heyy = useContext(noteContext);
  useEffect(() => {
    heyy.update();
  }, [12,12]);
  return (
    <>
      <h3>This is About of iNotebook</h3>
      <hr />
      <p>This is About {heyy.state.name} and he is in cource {heyy.state.cource}</p>
    </>
  );
};

export default About;
