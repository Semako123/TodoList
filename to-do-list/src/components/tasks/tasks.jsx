import React from "react";
import "./tasks.css";
import { Add } from "@mui/icons-material";
import Task from "../task/task";
import { Tooltip } from "@mui/material";

const Notes = () => {
  return (
    <div className="tasks">
      <div className="greeting">What plans do you have today?</div>
      <div className="header">
        <h3>Tasks</h3>
        <Tooltip title="Add Task">
          <button className="button">
            <Add className="svg" />
          </button>
        </Tooltip>
      </div>
      <Task />
    </div>
  );
};

export default Notes;
