import noteContext from "../context/notes/noteContext";
import Noteitem from "./noteItem";
import React,{useContext, useEffect} from "react";
// import AddNote from "./addNote";

const Notes=()=>{
    const context = useContext(noteContext);
    const {notes,getAllNote} =context;

    useEffect(()=>{
        getAllNote()
    },[])

    return(
        <>
        <div className="row m-3">
            {/* <h3>Your Notes</h3> */}
            {
                notes.map((note)=>{
                    return <Noteitem key={note._id} note={note}/>
                })
            }
        </div>
        </>
    )

}
export default Notes;