import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount) return;

    addExpense(amount, category);

    setAmount("");
    setCategory("Food");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Education</option>
        <option>Entertainment</option>
        <option>Health</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}