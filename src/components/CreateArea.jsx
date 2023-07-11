import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value
      };
    });
  }
  function submitnote(event) {
    props.onadd(note);
    event.preventDefault();
    setnote({
      // ek bar add krne ke bad khali kr diya
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form  method="post">
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
