import React from "react";

function Note(props) {
  function handleclick() {
    return props.ondelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}>DELETE</button>
    </div>
  );
}

export default Note;
