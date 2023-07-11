import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";

function App() {
  const [notes, setnotes] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8000/api/getall')
    .then(res=> setnotes(res.data))
  }, []);

  function addnote(newnote) {
    Axios.post('http://localhost:8000/api/addnew', newnote)
    .then(res=> setnotes(res.data))
  }
  function deletenote(id) {
    Axios.post('http://localhost:8000/api/delete', {id})
    .then(res=> setnotes(res.data));
  }
  return (
    <div>
      <Header />
      <CreateArea onadd = {addnote} />
      {notes.map((notesitem ,index) => {
        return (
          <Note
            key = {index}
            id = {notesitem._id}
            title={notesitem.title}
            content={notesitem.content}
            ondelete={deletenote}
          ></Note>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
