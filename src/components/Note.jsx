import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";

const Note = (props) => {
  const deleteNote = (id) => {
    props.setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return id !== index ? note : "";
      });
    });
  };
  const handleClick = (event) => {
    const { className } = event.target;

    if (
      className.baseVal === "MuiSvgIcon-root" ||
      className.baseVal === ""
    ) {
      deleteNote(props.id);
    } else {
      props.setPopup({
        id: props.id,
        title: props.title,
        content: props.content,
        deleteNote: deleteNote,
      });
    }
  };

  return props.id === props.popup.id ? (
    ""
  ) : (
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

      <Fab className="note__delete" onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
};
export default Note;
