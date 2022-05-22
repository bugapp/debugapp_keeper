import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
  return (
    <form className="form">
      <input
        type="text"
        className="form__title"
        placeholder="Title"
      />
      <textarea rows="3" placeholder="Content"></textarea>
      <button>
        <AddIcon />
      </button>
    </form>
  );
};

export default CreateArea;
