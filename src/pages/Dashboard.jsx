import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import { ExpenseContext } from "../context/ExpenseContext";
import { NotesContext } from "../context/NotesContext";
import { StudyContext } from "../context/StudyContext";

import SummaryCard from "../components/dashboard/SummaryCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import QuickActions from "../components/dashboard/QuickActions";

import "../components/dashboard/Dashboard.css";

    export default function Dashboard(){

    const {tasks}=useContext(TaskContext);

    const {expenses}=useContext(ExpenseContext);

    const {notes}=useContext(NotesContext);

    const { studySeconds, percentage } = useContext(StudyContext);
    const hrs = String(Math.floor(studySeconds / 3600)).padStart(2, "0");

const mins = String(
  Math.floor((studySeconds % 3600) / 60)
).padStart(2, "0");

const secs = String(studySeconds % 60).padStart(2, "0");

    const totalExpense=expenses.reduce(

    (total,expense)=>total+expense.amount,

    0

    );

        return(

        <div className="dashboard">

        <WelcomeCard/>

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
        value={`${hrs}:${mins}:${secs}`}
        />

        <SummaryCard
        icon="🎯"
        title="Today's Goal"
        value={`${Math.floor(percentage)}%`}
        />

        </div>

        <QuickActions/>

        </div>

        );

        }