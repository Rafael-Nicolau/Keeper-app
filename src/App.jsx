import React from "react";
import Header from "./components/Header";
import createNote from "./components/createNote";
import Footer from "./components/Footer";
import notes from "./components/notes"

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;