export default function SearchNotes({ search, setSearch }) {
  return (
    <div className="search-notes">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}