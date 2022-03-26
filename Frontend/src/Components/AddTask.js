import { useState } from "react";
import axios from "axios";
import { dark, light } from "../Utils/Colours";

export default function AddTask({ setTasks, allTasks, theme }) {
    const [description, setDescription] = useState("");
    return (
        <div className="task add-task" style={{ backgroundColor: theme ? dark : light }} >
            <button style={{
                backgroundColor: theme ? dark : light
            }} className="button" onClick={() => {
                if (!description) return;
                if (allTasks.filter((task) => task.description === description).length) return alert("Specified task description already exists.");
                const id = Date.now();
                setTasks([
                    ...allTasks,
                    {
                        description: description,
                        id: id,
                        complete: false
                    }
                ]);
                axios.post("http://localhost:3001/tasks/post", {
                    description: description,
                    complete: false,
                    id: id
                }).then((res) => {
                }).catch((err) => console.error(err));
                setDescription("");
            }}></button>
            <input onChange={(event) => {
                setDescription(event.target.value);
            }} className="set-description" style={{
                placeholder: {
                    color: theme ? "grey" : dark
                },
                focus: {
                    color: theme ? "white" : "grey"
                }
            }} type="text" placeholder="Create a new todo..." value={description}></input>
        </div >
    )
}