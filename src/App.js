import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import backgroundImage from "./Assets/bg-desktop-dark.jpg"
import './App.css';

function App() {
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
  return (
    <>
      <img src={backgroundImage} className="background-image"></img>
      <Tasks tasks={tasks} toggleTaskStatus={toggleTaskStatus} ></Tasks>
    </>
  );
}

export default App;
