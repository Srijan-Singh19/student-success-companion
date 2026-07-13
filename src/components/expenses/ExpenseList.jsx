import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  expenses,
  deleteExpense,
}) {

  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Expenses Added</h3>
      </div>
    );
  }

  return (
    <div className="expense-list">

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}

    </div>
  );
}