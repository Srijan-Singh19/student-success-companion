import { useNavigate } from "react-router-dom";
import {
  FaTasks,
  FaStickyNote,
  FaWallet,
} from "react-icons/fa";


export default function QuickActions() {

  const navigate = useNavigate();

  return (
    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-buttons">

        <button onClick={() => navigate("/tasks")}>
          <FaTasks />
          <span>Add Task</span>
        </button>

        <button onClick={() => navigate("/notes")}>
          <FaStickyNote />
          <span>Add Note</span>
        </button>

        <button onClick={() => navigate("/expenses")}>
          <FaWallet />
          <span>Add Expense</span>
        </button>

      </div>

    </div>
  );
}