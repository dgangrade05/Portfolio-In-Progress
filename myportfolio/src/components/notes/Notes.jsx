import React, {useEffect } from 'react';
import './notes.css'

function Notes() {
  let activeNote = null;
  let offsetX, offsetY;

  function startDrag(e) {
    activeNote = e.target;
    offsetX = e.clientX - activeNote.getBoundingClientRect().left;
    offsetY = e.clientY - activeNote.getBoundingClientRect().top;
  }

  function drag(e) {
    if (!activeNote) return;
    activeNote.style.left = e.clientX - offsetX + "px";
    activeNote.style.top = e.clientY - offsetY + "px";
  }

  function stopDrag() {
    activeNote = null;
  }

  useEffect(() => {
    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
      note.addEventListener("mousedown", startDrag);
      note.addEventListener("mousemove", drag);
      note.addEventListener("mouseup", stopDrag);

      note.addEventListener("click", () => {
        note.classList.add("rotate");
        setTimeout(() => {
          note.classList.remove("rotate");
        }, 1000);
      });
    });

    function animateNotesIn() {
      notes.forEach((note) => {
        note.classList.add("slide-in");
      });
    }

    animateNotesIn();

    window.addEventListener("beforeunload", () => {
      notes.forEach((note) => {
        // Perform any necessary cleanup before the component unloads
      });
    });

    return () => {
      notes.forEach((note) => {
        note.removeEventListener("mousedown", startDrag);
        note.removeEventListener("mousemove", drag);
        note.removeEventListener("mouseup", stopDrag);
      });

      window.removeEventListener("beforeunload", () => {
        notes.forEach((note) => {
          // Perform any necessary cleanup before the component unloads
        });
      });
    };
  },);

  return (
    <div>
      <div
        className="note" id='note1'
        onDragStart={(e)=>startDrag(e)}
        style={{
          backgroundColor: "#b8ffc6",
          top: 420,
        //   left: 930,
            right: 520,
        }}
      >
        <p className="notes-p">Open for<br />Intern roles.</p>
      </div>
      <div
        className="note" id='note2'
        style={{
          backgroundColor: "#faefcc",
          top:330 ,
        //   left: 1000,
            right: 420,
        }}
      >
        <p className="hello-icon">👋</p>
      </div>
    </div>
  );
};

export default Notes;