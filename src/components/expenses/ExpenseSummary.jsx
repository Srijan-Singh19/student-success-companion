export default function ExpenseSummary({
  expenses,
}) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="expense-summary">

      <h2>Total Expense</h2>

      <h1>₹{total}</h1>

    </div>
  );
}