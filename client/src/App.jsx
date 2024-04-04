import { useState } from "react";
import styles from "./App.module.css";
import TaskCard from "./components/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/todoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [task, setTask] = useState(""); // input from text feild is stored here.
  const allTasks = useSelector((state) => state.todoList.value); // all the tasks we added are stored here.
  const dispatch = useDispatch(); // hook to dispatch actions to redux store.

  // This function is to add task to To-Do
  const handleAddTask = () => {
    if (task.length === 0) {
      // checking if user trying to submit empty feild
      return toast.error("Task name cannot be empty.");
    }
    const payload = {
      task,
      status: false,
    };
    dispatch(addTask(payload)); // dispatching action to redux store with task and its status as payload.
    toast.success(`Your task:"${task}" \n - Added Succesfully`);
    setTask(""); // Clearing input feild when task is created.
  };

  return (
    <>
      <div className={styles.container}>
        <ToastContainer />
        <div className={styles.inputContainer}>
          <input
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // chekcking if user pressed enter to submit.
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
