import React from "react";
import "./tasks.css";
import { Add } from "@mui/icons-material";
import Task from "../task/task";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Notes = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState({});
  const [deadline, setdeadline] = useState("");
  const API = axios.create({ baseURL: "http://127.0.0.1:5000/" });

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
    const task = document.querySelector(".task-bar");
    form.className = "form";
    task.classList.remove("task-bar-move");
  };
  const handleShowTaskInput = () => {
    const form = document.querySelector(".form");
    const task = document.querySelector(".task-bar");
    form.className = "form-visible";
    task.classList.add("task-bar-move");
  };

  const handleSubmit = () => {
    if (task && deadline) {
      API.post("/addnote", { task: task, deadline: deadline }).then((res) => {
        console.log(res);
        fetchTasks();
      });
      const emptyString = "";
      settask(emptyString);
      setdeadline(emptyString);
      handleCancelTaskInput();
    }
  };

  const fetchTasks = () => {
    API.get("/fetch-tasks").then((res) => {
      const new_tasks = res.data;
      settasks(new_tasks);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
        <div className="task-bar">
          {tasks.data &&
            tasks.data.map((task) => (
              <Task title={task.title} deadline={task.deadline} key={task.id}/>
            ))}
          <Task />
        </div>
      </div>
    </>
  );
};

export default Notes;
