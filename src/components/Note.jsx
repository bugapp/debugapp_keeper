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

  return (
    <div className="note">
      <img
        src="/img/BugNotes.svg"
        alt="Bug Notes Icon"
        className="note__icon"
      />
      <h2 className="note__title">{props.title}</h2>
      <p className="note__content">{props.content}</p>

      <Fab className="note__delete" onClick={deleteNote}>
        <DeleteIcon className="delete__icon" />
      </Fab>
    </div>
  );
};
export default Note;
