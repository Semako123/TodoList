import React from "react";
import "./sidebar.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  let date = new Date();
  useEffect(() => {
    const blinkFunc = setInterval(() => {
      sethours(date.getHours());
      setminutes(date.getMinutes());
    }, 500);
    return () => clearInterval(blinkFunc);
  }, []);
  return (
    <div className="sidebar">
      <div className="greeting">Good Morning</div>
      <div>
        {hours}
        <span className="blink">:</span>
        {minutes < 10? "0" +  minutes  : minutes} 
      </div>
      <div className="upcoming">Upcoming tasks</div>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>STATUS</th>
            <th>DEADLINE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test title</td>
            <td>Active</td>
            <td>12:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
