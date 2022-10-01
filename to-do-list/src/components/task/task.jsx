import React from "react";
import "./task.css";
import {
  EditTwoTone,
  DeleteForeverTwoTone,
  CheckCircleTwoTone,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
const Task = ({title, deadline}) => {
  
  return (
    <>
      <div className="task task-header">
        <div className="head">
          <div className="title">
            {title}
            <div className="status">
              <span className="status-color"></span>Available
            </div>
          </div>
          <span className="deadline">{deadline}</span>
          <div className="actions">
            <Tooltip title="Mark done">
              <button className="action-button">
                <CheckCircleTwoTone className="a-svg" />
              </button>
            </Tooltip>
            <Tooltip title="Edit Task">
              <button className="action-button">
                <EditTwoTone className="a-svg" />
              </button>
            </Tooltip>
            <Tooltip title="Delete Task">
              <button className="action-button">
                <DeleteForeverTwoTone className="a-svg" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
