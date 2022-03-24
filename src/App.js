import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import backgroundImageDark from "./Assets/bg-desktop-dark.jpg";
import backgroundImageLight from "./Assets/bg-desktop-light.jpg";
import Header from "./Components/Header";
import { backgroundColourDark, backgroundColourLight } from "./Utils/Colours";
import './App.css';

function App() {
  const [theme, setTheme] = useState(true);
  const [displayMode, setDisplayMode] = useState(1);
  const [tasks, setTasks] = useState([
    {
      description: "Complete online JavaScript course",
      id: 1,
      complete: false,
    },
    {
      description: "Jog around the park 3x",
      id: 2,
      complete: false,
    },
    {
      description: "10 minutes meditation",
      id: 3,
      complete: false,
    },
    {
      description: "Read for 1 hour",
      id: 4,
      complete: false,
    },
    {
      description: "Pick up groceries",
      id: 5,
      complete: false,
    },
    {
      description: "Complete Todo App on Frontend Mentor",
      id: 6,
      complete: false,
    }
  ]);
  const toggleTaskStatus = (taskToChange) => {
    setTasks(
      tasks.map((task) => {
        task.complete = task.id === taskToChange.id ? !task.complete : task.complete;
        return task;
      })
    );
  }
  const clearCompleted = (tasks) => {
    setTasks(
      tasks.filter((task) => !task.complete)
    );
  }
  const toggleDisplayMode = (displayMode, tasks) => {
    if (displayMode === 1) return tasks;
    if (displayMode === 2) return tasks.filter(task => !task.complete);
    if (displayMode === 3) return tasks.filter(task => task.complete);
  }
  return (
    <div id="root" style={{
      backgroundColor: theme ? backgroundColourDark : backgroundColourLight
    }}>
      <img src={theme ? backgroundImageDark : backgroundImageLight} alt="" className="background-image"></img>
      <Header theme={theme} setTheme={setTheme} />
      <Tasks theme={theme} setTasks={setTasks} tasks={toggleDisplayMode(displayMode, tasks)} toggleTaskStatus={toggleTaskStatus} setDisplayMode={setDisplayMode} currentDisplayMode={displayMode} clearCompleted={clearCompleted} allTasks={tasks}></Tasks>
    </div >
  );
}

export default App;