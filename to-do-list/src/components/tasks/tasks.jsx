import React from "react";
import "./tasks.css";
import { Add } from "@mui/icons-material";
import Task from "../task/task";
import { Tooltip } from "@mui/material";
import { useState } from "react";
// import axios from "axios";

const Notes = () => {
  const [task, settask] = useState("");
  const [deadline, setdeadline] = useState("");

  const handleTaskChange = (e) => {
    const new_task = e.target.value;
    settask(new_task);
  };

  const handleDeadlineChange = (e) => {
    const new_dataTime = e.target.value;
    setdeadline(new_dataTime);
  };
  const handleCancelTaskInput = () => {
    const form = document.querySelector(".form-visible");
    form.className = "form";
  };
  const handleShowTaskInput = () => {
    const form = document.querySelector(".form");
    form.className = "form-visible";
  };

  // const API = axios.create({ baseURL: "http://127.0.0.1:5000/" });

  const handleSubmit = () => {
    // API.post("/addnote", {'task':task, 'deadline':deadline}).then(res=> (console.log(res)));
    const emptyString = ''
    settask(emptyString)
    setdeadline(emptyString)
    handleCancelTaskInput();
  };
  return (
    <>
      <div className="tasks">
        <div className="greeting">What plans do you have today?</div>
        <div className="header">
          <h3>Tasks</h3>
          <Tooltip title="Add Task">
            <button className="button" onClick={handleShowTaskInput}>
              <Add className="svg" />
            </button>
          </Tooltip>
        </div>
        <div className="form">
          <table>
            <thead>
              <tr>
                <th className="task-title">Task Title</th>
                <th className="task-date">Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="task-title"
                    className="task-form-title"
                    value={task}
                    onChange={handleTaskChange}
                  />
                </td>
                <td>
                  <input
                    type="datetime-local"
                    name="task-deadline"
                    className="task-form-date"
                    value={deadline}
                    onChange={handleDeadlineChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="b-done" onClick={handleSubmit}>
            Add
          </button>
          <button className="b-done" onClick={handleCancelTaskInput}>
            Cancel
          </button>
        </div>
        <Task />
      </div>
    </>
  );
};

export default Notes;
