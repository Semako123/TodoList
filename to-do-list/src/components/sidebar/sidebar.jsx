import React from "react";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { LinearProgress } from "@mui/material";

const Sidebar = () => {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [tasks, settasks] = useState({});
  let currentDateTime = new Date();

  const API = axios.create({
    baseURL: "http://127.0.0.1:5000",
  });

  const fetchTasks = () => {
    API.get("/fetch-tasks").then((res) => {
      const new_tasks = res.data;
      settasks(new_tasks);
    });
  };
  // const getMinutes = () => { console.log(date.getMinutes()); return date.getMinutes(); }
  // const getHours = () => date.getHours()

  useEffect(() => {
    setInterval(() => {
      fetchTasks();
    }, 2000);
  }, []);
  return (
    <div className="sidebar">
      <div className="greeting">Good Morning</div>
      <div>
        {hours}
        <span className="blink">:</span>
        {minutes < 10 ? "0" + minutes : minutes}
      </div>
      <div className="upcoming">Upcoming tasks</div>
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">TITLE</th>
            <th className="th">STATUS</th>
            <th className="th">DEADLINE</th>
          </tr>
        </thead>
        <tbody>
          {tasks.data ? (
            tasks.data.map((task) => {
              let deadlineDT = new Date(task.deadline);
              let taskAv;
              if (deadlineDT.getDate() == currentDateTime.getDate()) {
                deadlineDT > currentDateTime
                  ? (taskAv = true)
                  : (taskAv = false);
                return (
                  <tr className="tr" key={task.title}>
                    <td className="td">{task.title}</td>
                    <td className="td">{taskAv ? "Active" : "Expired"}</td>
                    <td className="td">{`${deadlineDT.getHours()}:${deadlineDT.getMinutes()}`}</td>
                  </tr>
                );
              }
            })
          ) : (
            <tr>
              <td>
                <LinearProgress />
              </td>
              <td>
                <LinearProgress />
              </td>
              <td>
                <LinearProgress />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
