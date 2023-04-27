import React, { useRef } from "react";
import axios from 'axios';
import "./PostData.css";


export const PostData = (props) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const addressRef = useRef('');
    const phoneRef= useRef('');
    const pictureRef = useRef('');

    const submitDataHandler = (event) => {
        event.preventDefault();

        const data = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            picture: pictureRef.current.value,
        };

        axios.post('https://pomorie-info-default-rtdb.europe-west1.firebasedatabase.app/objects.json', data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

  return (
    <>
      <div className="container">
        <div className="logo-wrapper">
          <img
            src="https://peex.softserveinc.com/assets/logo-min.svg"
            alt="peex logo"
          />
        </div>
        <h2>Sending post request to firebase, PeEx, working with forms</h2>
        <div className="form-wrapper">
          <form className="form" onSubmit={submitDataHandler}>
            <label htmlFor="name">Object name: </label>
            <input type="text" placeholder="City object name" id="name" ref={nameRef}/>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              placeholder="Your description here"
              id="description"
              ref={descriptionRef}
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              placeholder="Address: City, Str, Num..."
              id="address"
              ref={addressRef}
            />
            <label htmlFor="phone">Phone number: </label>
            <input
              type="number"
              placeholder="Example: +359 894 72 ** **"
              id="phone"
              ref={phoneRef}
            />
            <label htmlFor='picture'>Picture:</label>
            <input type='text' placeholder='picture URL here' id='picture' ref={pictureRef}/>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
