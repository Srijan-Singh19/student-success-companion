import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import SearchNotes from "../components/notes/SearchNotes";

import "../components/notes/Notes.css";

export default function Notes() {

  const [notes, setNotes] = useLocalStorage("notes", []);
  const [search, setSearch] = useState("");

  function addNote(title, description) {

    if (!title.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notes-page">

      <h1>Notes</h1>

      <NoteForm addNote={addNote} />

      <SearchNotes
        search={search}
        setSearch={setSearch}
      />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
      />

    </div>
  );
}