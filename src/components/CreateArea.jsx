import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
// import { Zoom } from "@material-ui/core";

const CreateArea = (props) => {
  return (
    <form className="form">
      <input
        type="text"
        className="form__title"
        placeholder="Title"
      />
      <textarea rows="3" className="form__content" placeholder="Content"></textarea>
      <Fab className="form__button" size="small">
        <AddIcon />
      </Fab>
    </form>
  );
};

export default CreateArea;
