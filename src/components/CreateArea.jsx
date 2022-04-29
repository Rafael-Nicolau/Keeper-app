import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleTitle(event) {
    const title = event.target.value;
    setInputTitle(title);
  }

  function handleContent(event) {
    const content = event.target.value;
    setInputContent(content);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addNote(inputTitle, inputContent);
    setInputTitle("");
    setInputContent("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={inputTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContent}
          value={inputContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
