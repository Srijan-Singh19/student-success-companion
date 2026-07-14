import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import ThemeProvider from "./context/ThemeContext";
import TaskProvider from './context/TaskContext.jsx';
import ExpenseProvider from './context/ExpenseContext.jsx';
import NotesProvider from './context/NotesContext.jsx';
import StudyProvider from "./context/StudyContext";
import App from './App.jsx';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TaskProvider>
           <ExpenseProvider>
            <NotesProvider>
              <StudyProvider>
          <App />
          </StudyProvider>
          </NotesProvider>
          </ExpenseProvider>
        </TaskProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
