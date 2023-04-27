import React from "react";
import "./PostData.css";

export const PostData = (props) => {
  return (
    <>
      <div className="container">
        <div className="logo-wrapper">
          <img
            src="https://peex.softserveinc.com/assets/logo-min.svg"
            alt="peex logo"
          />
        </div>
        <h2>Post data form for PeEx, working with forms</h2>
        <div className="form-wrapper">
          <form className="form">
            <label htmlFor="name">Object name: </label>
            <input type="text" placeholder="City object name" id="name" />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              placeholder="Your description here"
              id="description"
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              placeholder="Address: City, Str, Num..."
              id="address"
            />
            <label htmlFor="gps">GPS: </label>
            <input type="text" placeholder="GPS Coordinates" id="gps" />
            <label htmlFor="phone">Phone number: </label>
            <input
              type="number"
              placeholder="Example: +359 894 72 ** **"
              id="phone"
            />
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
