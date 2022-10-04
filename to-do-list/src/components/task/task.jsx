import React from "react";
import "./task.css";
import { EditTwoTone, DeleteForeverTwoTone } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
const Task = ({ id, title, deadline, handleDelete, handleEdit }) => {
  const dateTime = new Date(deadline);
  const currentDateTime = new Date();
  const [taskAv, settaskAv] = useState(true);
  useEffect(() => {
    dateTime > currentDateTime ? settaskAv(true) : settaskAv(false);
  }, []);

  return (
    <>
      <div className="task task-header">
        <div className="head">
          <div className="title">
            {title}
            <div className="status">
              <span
                className={`status-color ${
                  taskAv ? "status-color-green" : "status-color-red"
                }`}
              ></span>
              {taskAv ? "Active" : "Expired"}
            </div>
          </div>
          <span className="deadline">{`${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()} | ${dateTime.getHours()}:${dateTime.getMinutes()}`}</span>
          <div className="actions">
            <Tooltip title="Edit Task">
              <button className="action-button" onClick={() => { handleEdit(id, title, deadline) }}>
                <EditTwoTone className="a-svg" />
              </button>
            </Tooltip>
            <Tooltip title="Delete Task" onClick={handleDelete}>
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
