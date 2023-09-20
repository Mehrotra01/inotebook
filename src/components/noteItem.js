import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const noteItem = (props) => {
  const { note, updateNote,showAlert } = props;
  const context = useContext(noteContext);
  const { delNote } = context;

  const delNotes = (e) => {
    delNote(note._id);
    showAlert("Deleted SuccessFully","success");
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card m-3">
          <div className="card-body">
            <div className="d-flex align-item-center">
              <h4 className="card-title">{note.title}</h4>
              <i className="far fa-trash-alt m-2" onClick={delNotes}></i>
              <i
                className="far fa-edit my-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
            {/* <p className="card-text">{note.tag}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default noteItem;
