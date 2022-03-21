import image from "../Assets/icon-check.svg"

export default function Task({ task, toggleTaskStatus }) {
    return (
        <div className="task" key={task.id} >
            <button className="button" onClick={() => toggleTaskStatus(task)}>
                {task.complete && <img src={image} />}
            </button>
            <h3 className="description" style={{ textDecoration: task.complete ? "line-through" : "none" }}>{task.description}</h3>
        </div >
    )
}