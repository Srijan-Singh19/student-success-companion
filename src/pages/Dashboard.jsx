import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ExpenseContext } from "../context/ExpenseContext";
import { NotesContext } from "../context/NotesContext";

import SummaryCard from "../components/dashboard/SummaryCard";
import "./Dashboard.css";
export default function Dashboard(){
    const { tasks } = useContext(TaskContext);
    const {expenses} = useContext(ExpenseContext);
    const totalExpense = expenses.reduce(

    (total, expense) => total + expense.amount,0
    );
    const { notes } = useContext(NotesContext);

    return(
        <div className="dashboard">
        <h1>Welcome, User</h1>
        <div className="cards-container">
        <SummaryCard
            icon="📋"
            title="Tasks"
            value={tasks.length}
            />

            <SummaryCard
            icon="📝"
            title="Notes"
            value={notes.length}
            />

        <SummaryCard
        icon="💰"
        title="Expenses"
        value={`₹${totalExpense}`}
        />

        <SummaryCard
        icon="⏱"
        title="Study Time"
        value="00:00:00"
        />

        <SummaryCard
        icon="🎯"
        title="Today's Goal"
        value="0%"
        />
        </div>
        </div>
    );
}