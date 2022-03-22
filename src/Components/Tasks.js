import AddTask from "./AddTask"
import Task from "./Task"
import Button from "./Button"

export default function Tasks({ setTasks, tasks, toggleTaskStatus, setDisplayMode, currentDisplayMode, clearCompleted, allTasks }) {
    return (

        <div className="menu">
            <AddTask setTasks={setTasks} allTasks={allTasks} />
            <div className="list">
                {tasks.map((task) => (
                    <Task task={task} key={task.id} toggleTaskStatus={toggleTaskStatus} />
                ))}
                <div className="footer">
                    <h5>{tasks.length} tasks left</h5>
                    <div>
                        <Button displayMode={1} text="All" setDisplayMode={setDisplayMode} currentDisplayMode={currentDisplayMode} />
                        <Button displayMode={2} text="Active" setDisplayMode={setDisplayMode} currentDisplayMode={currentDisplayMode} />
                        <Button displayMode={3} text="Completed" setDisplayMode={setDisplayMode} currentDisplayMode={currentDisplayMode} />
                    </div>
                    <button
                        className="buttons"
                        onClick={() => clearCompleted(allTasks)}
                    >Clear Completed</button>
                </div>
            </div>
        </div>
    )
}