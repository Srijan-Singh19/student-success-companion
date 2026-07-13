export default function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
    >
      <option value="All">All</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
      <option value="Education">Education</option>
      <option value="Entertainment">
        Entertainment
      </option>
      <option value="Health">Health</option>
      <option value="Bills">Bills</option>
      <option value="Others">Others</option>
    </select>
  );
}