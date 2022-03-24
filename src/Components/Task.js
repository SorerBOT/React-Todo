import taskComplete from "../Assets/icon-check.svg"
import { dark, light } from "../Utils/Colours";

export default function Task({ theme, task, toggleTaskStatus }) {
    return (
        <div className="task" key={task.id} style={{
            backgroundColor: theme ? dark : light,
            borderColor: theme ? light : dark
        }}>
            <button style={{
                backgroundImage: task.complete ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : "none",
                backgroundColor: theme ? dark : light,
                borderColor: theme ? light : dark
            }} className="button" onClick={() => toggleTaskStatus(task)}>
                {task.complete && <img src={taskComplete} />}
            </button>
            <h3 className="description" style={{
                textDecoration: task.complete ? "line-through" : "none",
                color: theme ? task.complete ? "grey" : "white" : task.complete ? dark : "grey"
            }}>{task.description}</h3>
        </div >
    )
}