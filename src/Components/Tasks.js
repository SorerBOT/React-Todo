import Task from "./Task"

export default function Tasks({ tasks, toggleTaskStatus }) {
    return (
        <div className="list">
            {tasks.map((task) => (
                <Task task={task} key={task.id} toggleTaskStatus={toggleTaskStatus} />
            ))}
        </div>
    )
}