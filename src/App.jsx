import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "It's a title",
      content: "It's a content",
    },
  ]);
  return (
    <main className="App">
      <Header />
      <CreateArea setNotes={setNotes} />
      <section className="section-notes">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              setNotes={setNotes}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
