import React from "react";
import "./sidebar.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  let date = new Date();
  useEffect(() => {
    let newMinutes = date.getMinutes();
    let newHours = date.getHours();
    sethours(newHours);
    setminutes(newMinutes);
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
          <tr className="tr">
            <td className="td">Test title</td>
            <td className="td">Active</td>
            <td className="td">12:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
