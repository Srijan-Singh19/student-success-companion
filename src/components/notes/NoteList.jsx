import NoteItem from "./NoteItem";

export default function NoteList({ notes, deleteNote }) {

  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Notes Found</h3>
        <p>Start by creating your first note.</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}