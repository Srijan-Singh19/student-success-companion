import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";
import ExpenseSummary from "../components/expenses/ExpenseSummary";

import "../components/expenses/Expenses.css";

export default function Expenses() {

    const {

expenses,

addExpense,

deleteExpense

} = useContext(ExpenseContext);

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