import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", []);

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
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}