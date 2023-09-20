import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const allNote = [];
  const [notes, setNotes] = useState(allNote);

  // Add a note
  const getAllNote = async () => {
    // TODO :API CALL
    const responce = await fetch(`${host}/api/notes/allNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-header":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzg5NjM2MDA0M2UzNjkzOWE2ZDVlIn0sImlhdCI6MTY5NDQyMjc1N30.nKB7wLm7GcoHonMkpiyoY8lr-dnHcaUJlYw7MoB7ARU",
      },
    });

    const json = await responce.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO :API CALL
    const responce = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-header":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzg5NjM2MDA0M2UzNjkzOWE2ZDVlIn0sImlhdCI6MTY5NDQyMjc1N30.nKB7wLm7GcoHonMkpiyoY8lr-dnHcaUJlYw7MoB7ARU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await responce.json();
    console.log(json);
    const note = {
      _id: "64ec8aad795ce701fdd10405",
      user: "64e9fc15e97b75fbd632c57a",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-28T11:53:17.328Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // delete a note
  const delNote = async (id) => {
    const responce = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-header":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzg5NjM2MDA0M2UzNjkzOWE2ZDVlIn0sImlhdCI6MTY5NDQyMjc1N30.nKB7wLm7GcoHonMkpiyoY8lr-dnHcaUJlYw7MoB7ARU",
      },
    });
    // console.log("del note with id1" + id);
    console.log(await responce.json());
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    const responce = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-header":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzg5NjM2MDA0M2UzNjkzOWE2ZDVlIn0sImlhdCI6MTY5NDQyMjc1N30.nKB7wLm7GcoHonMkpiyoY8lr-dnHcaUJlYw7MoB7ARU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await responce.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, delNote, editNote, getAllNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
