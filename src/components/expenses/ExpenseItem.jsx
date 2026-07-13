export default function ExpenseItem({
  expense,
  deleteExpense,
}) {
  return (
    <div className="expense-card">

      <div>

        <h3>{expense.category}</h3>

        <p>{expense.date}</p>

      </div>

      <div>

        <h2>₹{expense.amount}</h2>

        <button
          className="delete-btn"
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}