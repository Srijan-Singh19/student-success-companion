import SummaryCard from "../components/dashboard/SummaryCard";
import "./Dashboard.css"
export default function Dashboard(){
    return(
        <div className="dashboard">
        <h1>Welcome, User</h1>
        <div className="cards-container">
        <SummaryCard title="Tasks" value="4" />
      <SummaryCard title="Notes" value="6" />
      <SummaryCard title="Expenses" value="₹1200" />
      <SummaryCard title="Studytime" value="28°C" />
      <SummaryCard title="Study Progress" value="72%" />
        </div>
        </div>
    );
}