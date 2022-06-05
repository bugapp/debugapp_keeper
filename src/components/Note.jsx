import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";

const Note = (props) => {
  const deleteNote = () => {
    props.setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return props.id !== index ? note : "";
      });
    });
  };
  const handleClick = (event) => {
    if (event.target.className === "note") {
      alert(`
      - Title: ${props.title};
      - Content: ${props.content}
      `);
    }
  };

  return (
    <div className="note" onClick={handleClick}>
      <img
        src="/img/BugNotes.svg"
        alt="Bug Notes Icon"
        className="note__icon"
      />
      <h2 className="note__title">
        {props.title.length >= 30
          ? props.title.substring(0, 30) + "..."
          : props.title}
      </h2>
      <p className="note__content">
        {props.content.length >= 30
          ? props.content.substring(0, 30) + "..."
          : props.content}
      </p>

      <Fab className="note__delete" onClick={deleteNote}>
        <DeleteIcon className="delete__icon" />
      </Fab>
    </div>
  );
};
export default Note;
