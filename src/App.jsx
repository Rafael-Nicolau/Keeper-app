import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/createNote";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App() {
  const [note, setNote] = useState([
    {
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
    },
    {
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
    },
    {
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
    },
    {
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
    },
  ]);
//Make input have a controled state and make button add note

  return (
    <div>
      <Header />
      <CreateArea />
      {note.map((aNote, index) => (
        <CreateNote
          key={index}
          id={index}
          title={aNote.title}
          content={aNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
