import React, { useState } from "react";

const Note = ({ id, title, note, comment, date, onDelete, modifyNote }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: title,
    note: note,
    comment: comment,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Appeler la fonction de modification de la note du store Zustand ici
    modifyNote({title, updatedNote: editedNote});
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Réinitialiser les modifications avec les valeurs d'origine
    setEditedNote({
      title: title,
      note: note,
      comment: comment,
    });
  };


  return (
    <div>
    <div>
    {isEditing ? (
      <div>
        <input
          data-testid='title_modify'
          type="text"
          value={editedNote.title}
          onChange={(e) =>
            setEditedNote({ ...editedNote, title: e.target.value })
          }
        />
        <input
          data-testid='note_modify'
          type="number"
          value={editedNote.note}
          onChange={(e) =>
            setEditedNote({ ...editedNote, note: e.target.value })
          }
        />
        <textarea
          data-testid='comment_modify'
          value={editedNote.comment}
          onChange={(e) =>
            setEditedNote({ ...editedNote, comment: e.target.value })
          }
        ></textarea>
        <button onClick={handleSaveClick}>Enregistrer</button>
        <button onClick={handleCancelClick}>Annuler</button>
      </div>
    ) : (
      <div>
        <h2>{title}</h2>
        <p data-testid='note-color' style={{ backgroundColor: note < 8 ? "red" : note < 10 ? "orange" : note < 13 ? "yellow" : "green" }}>Note: {note}</p>
        <p>Commentaire: {comment}</p>
        <p>Date de création: {date}</p>
        <button onClick={handleEditClick}>Modifier</button>
        <button onClick={() => onDelete(title)}>Supprimer</button>
      </div>
    )}
  </div>
  </div>
  );
};

export default Note;