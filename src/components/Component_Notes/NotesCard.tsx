// NotesCard.tsx
import React from "react";

const NotesCard = ({ data, onNoteClick }) => {
  return (
    <div>
      {data.map((note) => (
        <div
          key={note.id}
          className="bg-black p-4 rounded-lg cursor-pointer"
          onClick={() => onNoteClick(note.id)} // Trigger onNoteClick with the note ID
        >
          <h3 className="text-xl text-white">{note.title}</h3>
          <p className="text-gray-400">Category: {note.category}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesCard;
