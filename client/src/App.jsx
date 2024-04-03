import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [task, setTask] = useState("");
  return (
    <div className={styles.app}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task here..."
          type="text"
          name="task"
        />
        <button>Add To List</button>
      </div>
    </div>
  );
}

export default App;
