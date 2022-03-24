import AddTask from "./AddTask"
import Task from "./Task"
import Button from "./Button"
import { dark, light } from "../Utils/Colours"
export default function Tasks({ theme, setTasks, tasks, toggleTaskStatus, setDisplayMode, currentDisplayMode, clearCompleted, allTasks }) {
    return (
        <div className="menu">
            <AddTask theme={theme} setTasks={setTasks} allTasks={allTasks} />
            <div className="list" style={{
                backgroundColor: theme ? dark : light
            }}>
                {tasks.map((task) => (
                    <Task theme={theme} task={task} key={task.id} toggleTaskStatus={toggleTaskStatus} />
                ))}
                <div className="footer">
                    <h5>{tasks.length} tasks left</h5>
                    <div>
                        <Button theme={theme} displayMode={1} text="All" setDisplayMode={setDisplayMode} currentDisplayMode={currentDisplayMode} />
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