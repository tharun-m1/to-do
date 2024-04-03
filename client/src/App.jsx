import { useState } from "react";
import styles from "./App.module.css";
import TaskCard from "./components/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/todoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [task, setTask] = useState("");
  const allTasks = useSelector((state) => state.todoList.value);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.length === 0) {
      return toast.error("Task name cannot be empty.");
    }
    const payload = {
      task,
      status: false,
    };
    dispatch(addTask(payload));
    toast.success(`Your task:"${task}" \n - Added Succesfully`);
    setTask("");
  };

  return (
    <>
      <div className={styles.container}>
        <ToastContainer />
        <div className={styles.inputContainer}>
          <input
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleAddTask();
              }
            }}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task here..."
            type="text"
            name="task"
            value={task}
          />
          <button onClick={handleAddTask}>Add To List</button>
        </div>
        <div className={styles.caption}>
          {allTasks.length > 0 ? "Your Tasks" : ""}
        </div>
        <div className={styles.todoContainer}>
          {allTasks?.map((task, idx) => {
            return <TaskCard key={idx} item={task} position={idx} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
