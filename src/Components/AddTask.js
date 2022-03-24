import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { dark, light } from "../Utils/Colours";

export default function AddTask({ setTasks, allTasks, theme }) {
    const [description, setDescription] = useState("");
    return (
        <div className="task add-task" style={{ backgroundColor: theme ? dark : light }} >
            <button style={{
                backgroundColor: theme ? dark : light
            }} className="button" onClick={() => {
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