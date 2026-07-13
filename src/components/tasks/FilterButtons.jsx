export default function FilterButtons({
  filter,
  setFilter,
}) {
  return (
    <div className="filter-buttons">

      <button
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>

    </div>
  );
}