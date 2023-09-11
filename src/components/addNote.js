import React from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext,useState } from 'react';

const addNote = () => {
    
    const context = useContext(noteContext);
    const {addNote} =context;
    
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const  [note, setNote] = useState({title:"",desc:"",tag:"default"})
    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }


    return (
    <div className="container m-4">
    <h1 >Add a Note</h1>
      <form >
        <div className="mb-3">
          <label  htmlFor="title" className="form-label">
            title
          </label>
          <input
          onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            name='title'
            aria-describedby="emailHelp"
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
            name='description'
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
            name='Tag'
          />
        </div>
      
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  )
}

export default addNote