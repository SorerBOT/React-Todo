import { useState } from "react";

export default function AddTask({ setTasks, allTasks }) {
    const [description, setDescription] = useState("");
    return (
        <div className="task add-task" >
            <button className="button" onClick={() => {
                if (!description) return;
                setTasks([
                    ...allTasks,
                    {
                        description: description,
                        id: Date.now(),
                        complete: false
                    }
                ]);
                setDescription("");
            }}></button>
            <input onChange={(event) => {
                setDescription(event.target.value);
            }} className="set-description" type="text" placeholder="Create a new todo..." value={description}></input>
        </div >
    )
}