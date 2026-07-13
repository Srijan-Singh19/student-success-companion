import useLocalStorage from "../hooks/useLocalStorage";

import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";
import ExpenseSummary from "../components/expenses/ExpenseSummary";

import "../components/expenses/Expenses.css";

export default function Expenses() {

  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function addExpense(amount, category) {

    const expense = {
      id: Date.now(),
      amount: Number(amount),
      category,
      date: new Date().toLocaleDateString(),
    };

    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {

    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );

  }

  return (

    <div className="expenses-page">

      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseSummary expenses={expenses} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

    </div>

  );
}