import noteContext from "../context/notes/noteContext";
import Noteitem from "./noteItem";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate()
  
  const { notes, getAllNote, editNote } = context;
  const { showAlert } = props;
  useEffect(() => {
    if(localStorage.getItem('token')){
    getAllNote();
    }else{
      navigate('/login')
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleClick = (e) => {
    // console.log("Updating the Note..", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    showAlert("Updated Succesfully", "success");

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currNote) => {
    ref.current.click();
    setNote({
      id: currNote._id,
      etitle: currNote.title,
      edescription: currNote.description,
      etag: currNote.tag,
    });
  };
  
  return (
    <>
      <div className="row m-4">
        {/* <h2>Your Notes</h2> */}
        {notes.length === 0 && "No notes to display"}
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} />
          );
        })}
      </div>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  title
                </label>
                <input
                  onChange={onChange}
                  value={note.etitle}
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  description
                </label>
                <input
                  value={note.edescription}
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  value={note.etag}
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notes;
