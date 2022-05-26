import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

const CreateArea = (props) => {
  const [focus, isFocus] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    const { className, id } = event.target;
    if (className === "form__title") {
      event.target.style.borderBottom = "none";
      event.target.style.borderRadius = "0.5em 0.5em 0em 0em";
      isFocus(true);
    }
    if (id === "addButton") {
      props.setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  };

  return (
    <form className="form">
      <input
        type="text"
        className="form__title"
        name="title"
        placeholder="Title"
        onClick={handleClick}
        onChange={handleChange}
      />
      {focus && (
        <textarea
          rows="3"
          className="form__content"
          name="content"
          placeholder="Content"
          resize="none"
          onChange={handleChange}
        ></textarea>
      )}
      <Zoom in={focus}>
        <Fab
          className="form__button"
          disabled={!focus}
          onClick={handleClick}
        >
          <AddIcon className="button__icon" id="addButton" />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
