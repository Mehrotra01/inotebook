import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const addNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  let navigate= useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
    navigate('/login')
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    
    props.showAlert("Added SuccessFully","success");
  };

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container m-4">
      <h1>Add a Note</h1>
      <form className="container m-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
          />
        </div>

        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default addNote;
