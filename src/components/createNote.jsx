import React from "react";
import Note from "./Note";

function CreateNote(props) {
  return <Note id={props.id} title={props.title} content={props.content} deleteNote={props.deleteNote}/>;
}

export default CreateNote;
