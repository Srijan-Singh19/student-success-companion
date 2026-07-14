import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {

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

      expenses.filter(
        expense => expense.id !== id
      )

    );

  }

  return (

    <ExpenseContext.Provider

      value={{

        expenses,

        addExpense,

        deleteExpense,

      }}

    >

      {children}

    </ExpenseContext.Provider>

  );

}