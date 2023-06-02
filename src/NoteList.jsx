import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onDelete, modifyNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          note={note.note}
          comment={note.comment}
          date={note.date}
          onDelete={onDelete}
          modifyNote={modifyNote}
        />
      ))}
    </div>
  );
};

export default NoteList;