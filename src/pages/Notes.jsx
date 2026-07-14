import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import SearchNotes from "../components/notes/SearchNotes";

import "../components/notes/Notes.css";

export default function Notes() {

  const { notes, addNote, deleteNote } = useContext(NotesContext);

  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notes-page">

      <h1>📝 Notes</h1>

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