import React, { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./Components/Tasks";
import backgroundImageDark from "./Assets/bg-desktop-dark.jpg";
import backgroundImageLight from "./Assets/bg-desktop-light.jpg";
import Header from "./Components/Header";
import { backgroundColourDark, backgroundColourLight } from "./Utils/Colours";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState(true);
  const [displayMode, setDisplayMode] = useState(1);
  useEffect(() => {
    axios.get("http://localhost:3001/tasks/get")
      .then((res) => {
        setTasks(res.data);
      }).catch((err) => err);
  }, []);
  const toggleTaskStatus = (taskToChange) => {
    console.log(taskToChange);
    axios.post("http://localhost:3001/tasks/post", {
      description: taskToChange.description,
      complete: !taskToChange.complete,
      id: taskToChange.id
    }).catch((err) => { return console.error(err) });
    setTasks(
      tasks.map((task) => {
        task.complete = task.id === taskToChange.id ? !task.complete : task.complete;
        return task;
      })
    );
  }
  const clearCompleted = (tasks) => {
    if (!tasks.find((task) => task.complete)) return;
    axios.get("http://localhost:3001/tasks/clear");
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