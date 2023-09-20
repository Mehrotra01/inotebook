import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";

const addNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
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
          <label htmlFor="Tag" className="form-label">
            Tag
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="Tag"
            name="Tag"
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
