import React, { useState } from "react";
import styles from "./taskcard.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, markTask } from "../../redux/todoList";
function TaskCard({ item, position }) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(position));
  };
  return (
    <>
      <div
        style={{ outline: hovered && !item.status ? "3px solid green" : "" }}
        className={`${styles.container} ${item.status ? styles.done : ""}`}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => dispatch(markTask(position))}
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
