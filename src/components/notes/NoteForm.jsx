import { useState } from "react";

export default function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addNote(title, description);

    setTitle("");
    setDescription("");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      ></textarea>

      <button type="submit">
        Add Note
      </button>
    </form>
  );
}