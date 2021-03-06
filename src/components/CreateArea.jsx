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
    if (
      id === "addButton" ||
      className === "form" ||
      className === "form__button"
    ) {
      const titleInput = document.querySelector(".form__title");
      const contentInput = document.querySelector(".form__content");

      if (titleInput.value.length <= 5) {
        titleInput.focus();
      }
      if (contentInput.value.length <= 5) {
        contentInput.focus();
      }
      if (
        titleInput.value.length > 5 &&
        contentInput.value.length > 5
      ) {
        props.setNotes((prevNotes) => {
          return [...prevNotes, newNote];
        });
        titleInput.value = "";
        contentInput.value = "";
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick(event);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
          autoFocus={true}
        ></textarea>
      )}
      <Zoom in={focus} onClick={handleClick} className="form__button">
        <Fab className="form__button" disabled={!focus}>
          <AddIcon className="button__icon" id="addButton" />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
