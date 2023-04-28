import React from "react";
import "./Table.css";
import { CustomCard } from "../UI/CustomCard";

export const Table = () => {
  const myTable = {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    days: [21, 20, 22, 18, 20, 22, 21, 23, 19, 22, 22, 18],
    hours: [168, 160, 176, 144, 160, 176, 168, 184, 152, 176, 176, 144],
  };

  const paidTimeOff = 25 * 8;
  const totalDays = myTable.days.reduce((total, current) => total + current);
  const totalHours = myTable.hours.reduce((total, current) => total + current);

  return (
    <CustomCard>
      <h2>Adding Table to the document.</h2>
      <table style={{ float: "left" }}>
        <caption style={{ color: "red", paddingBottom: "20px" }}>
          Working days in year 2023
        </caption>
        <thead>
          <tr>
            <th>By month</th>
            {myTable.months.map((month, index) => {
              return <th key={index}>{month}</th>;
            })}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Working days</th>
            {myTable.days.map((day, index) => {
              return <td key={index}>{day}</td>;
            })}
            <td>{totalDays}</td>
          </tr>
          <tr>
            <th>Working hours</th>
            {myTable.hours.map((hour, index) => {
              return <td key={index}>{hour}</td>;
            })}
            <td>{totalHours}</td>
          </tr>          
        </tbody>
        <tfoot>
          <tr>
            <td colspan="14" style={{ textAlign: "center" }}>
              Info from{" "}
              <a
                href="https://kik-info.com/spravochnik/calendar/2023/"
                target="__blank"
              >
                kik-info
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      <p style={{ marginTop: "20px" }}>
        In 2023 we will work <b>{totalDays}</b> days and <b>{totalHours}</b>{" "}
        hours, but do not forget your PTO which is <b>25</b> days or{" "}
        <b>{paidTimeOff}</b> working hours 😉.
      </p>
    </CustomCard>
  );
};
