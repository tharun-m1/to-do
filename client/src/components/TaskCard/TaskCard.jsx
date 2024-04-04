import React, { useState } from "react";
import styles from "./taskcard.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, markTask } from "../../redux/todoList";
function TaskCard({ item, position }) {
  const [hovered, setHovered] = useState(false); // Toggles when user hover over TaskCard.
  const dispatch = useDispatch();
  const handleDelete = () => {
    // Delete the task
    dispatch(deleteTask(position)); // position is index of task in array of tasks. received from parent(App.js)
  };
  return (
    <>
      <div
        style={{ outline: hovered && !item.status ? "3px solid green" : "" }} // When hovered outline turns to green indicating if user wants to mark it as done.
        className={`${styles.container} ${item.status ? styles.done : ""}`}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => dispatch(markTask(position))} // clicking on TaskCard will mark it as done and changes its background color.
          className={styles.left}
        >
          {item.task}
        </div>
        <div className={styles.right}>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
