import React, { useState, useEffect } from 'react';
import './notes.css'

const Notes = () => {
  const noteColors = [
    "#b8ffc6",
    "#faefcc",
    // Add more colors as needed
  ];

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const startDrag = (e) => {
    setActiveNote(e.target);
    setOffsetX(e.clientX - e.target.getBoundingClientRect().left);
    setOffsetY(e.clientY - e.target.getBoundingClientRect().top);
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
  };

  const drag = (e) => {
    if (!activeNote) return;
    activeNote.style.left = e.clientX - offsetX + "px";
    activeNote.style.top = e.clientY - offsetY + "px";
  };

  const stopDrag = () => {
    setActiveNote(null);
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDrag);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const updatedNotes = [...notes];

    if (screenWidth <= 1024) {
      updatedNotes[0] = { top: "420px", left: "550px" };
      updatedNotes[1] = { top: "340px", left: "670px" };
    } else {
      updatedNotes[0] = { top: "410px", left: "885px" };
      updatedNotes[1] = { top: "310px", left: "980px" };
    }

    setNotes(updatedNotes);
  }, [notes]);

  return (
    <div>
      <div
        className="note"
        style={{
          backgroundColor: noteColors[0],
          top: notes[0]?.top,
          left: notes[0]?.left,
        }}
      >
        <p className="notes-p">Open for<br />Intern roles.</p>
      </div>
      <div
        className="note"
        style={{
          backgroundColor: noteColors[1],
          top: notes[1]?.top,
          left: notes[1]?.left,
        }}
      >
        <p className="hello-icon">👋</p>
      </div>
    </div>
  );
};

export default Notes;