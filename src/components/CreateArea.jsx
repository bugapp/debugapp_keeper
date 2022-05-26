import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

const CreateArea = (props) => {
  const [focus, isFocus] = useState(false);

  const handleClick = (event) => {
    event.target.style.borderBottom = "none";
    event.target.style.borderRadius = "0.5em 0.5em 0em 0em";
    isFocus(true);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="form__title"
        placeholder="Title"
        onClick={handleClick}
      />
      {focus && (
        <textarea
          rows="3"
          className="form__content"
          placeholder="Content"
          resize="none"
        ></textarea>
      )}
      <Zoom in={focus}>
        <Fab className="form__button" disabled={!focus}>
          <AddIcon className="button__icon" />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
