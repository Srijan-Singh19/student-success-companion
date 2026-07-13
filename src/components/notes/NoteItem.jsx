export default function NoteItem({ note, deleteNote }) {
  return (
    <div className="note-card">

      <h2>{note.title}</h2>

      <p>{note.description}</p>

      <small>📅 {note.date}</small>

      <button
        className="delete-btn"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>

    </div>
  );
}