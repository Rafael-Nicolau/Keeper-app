import React from "react";

function Note(props) {
  function handleDelete(event) {
    const id = event.target.value;
    props.deleteNote(id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete} value={props.id}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
