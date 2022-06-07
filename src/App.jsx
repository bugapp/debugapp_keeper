import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import PopUpNote from "./components/PopUpNote";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "It's a title",
      content: "It's a content",
    },
  ]);
  const [popup, setPopup] = useState({
    id: "",
    title: "",
    content: "",
  });
  const handleClick = (event) => {
    const { className } = event.target;
    if (className === "background-popup") {
      setPopup({ id: "", title: "", content: "" });
    }
  };

  return (
    <main className="App" onClick={handleClick}>
      <Header />
      <CreateArea setNotes={setNotes} />
      <section className="section-notes">
        {popup.id !== "" ? (
          <PopUpNote
            popup={popup}
            setNotes={setNotes}
            setPopup={setPopup}
          />
        ) : (
          ""
        )}
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              setNotes={setNotes}
              setPopup={setPopup}
              popup={popup}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
