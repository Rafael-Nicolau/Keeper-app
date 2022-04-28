import React from "react";
import Note from "./Note";

function CreateNote(note) {
  return <Note id={note.id} title={note.title} content={note.content} />;
}

export default CreateNote;
