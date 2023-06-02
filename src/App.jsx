import React, { useState } from "react";
import NoteList from "./NoteList";
import useNoteStore from './store';

const App = () => {
  const [title, setTitle] = useState("");
  const {addNote: addNoteStore, notes, deleteNote: deleteNoteStore, modifyNote: modifyNoteStore} = useNoteStore();
  const [comment, setComment] = useState("");
  const [note, setNote] = useState();


  const addNote = (title, note, comment, date) => {
    const newNote = { id: Date.now(), title, note, comment, date };
    addNoteStore(newNote);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleNoteChange = (event) => {
    setNote(Number(event.target.value));
  };
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(title, note, comment, new Date().toLocaleString());
    setTitle("");
    setNote(0);
    setComment("");
  };

  const deleteNote = (title) => {
    deleteNoteStore(title);
  };
  const modifyNote = (title) => {
    modifyNoteStore(title);
  }

  return (
      <div>
        <h1>Gestion de notes</h1>
        <NoteList notes={notes} onDelete={deleteNote} modifyNote={modifyNote}/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="number"
            placeholder="Note"
            onChange={handleNoteChange}
          />
          <textarea
            placeholder="Commentaire"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button type="submit">Ajouter une note</button>
        </form>
      </div>
  );
};

export default App;