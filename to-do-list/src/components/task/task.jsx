import React from "react";
import "./task.css";
import { EditTwoTone, DeleteForeverTwoTone } from "@mui/icons-material";
import { useState } from "react";

const Task = () => {
  const test = () => {
    const tmpState = [...taskClass];
    tmpState.push("visble");
    settaskClass(tmpState);
  };
  const [taskClass, settaskClass] = useState(["test"]);
  return (
    <div className="task">
      <div className="header" onMouseOver={test}>
        <div className="title">Task Title</div>
        <div className="actions">
          <button className="action-button">
            <EditTwoTone className="a-svg" />
          </button>
          <button className="action-button">
            <DeleteForeverTwoTone className="a-svg" />
          </button>
        </div>
      </div>
      <div className={taskClass.join(" ")}>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  );
};

export default Task;
