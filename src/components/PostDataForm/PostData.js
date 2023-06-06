import React, { useState, useRef } from "react";
import axios from 'axios';
import classes from "./PostData.module.css";
import { CustomCard } from "../UI/CustomCard";


export const PostData = (props) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('')

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const addressRef = useRef('');
  const phoneRef= useRef('');
  const pictureRef = useRef('');

  const data = {
    name: nameRef.current.value,
    description: descriptionRef.current.value,
    address: addressRef.current.value,
    phone: phoneRef.current.value,
    picture: pictureRef.current.value,
  };

  const validateData = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const picture = pictureRef.current.value;

    if (!name || !description || !address || !phone || !picture) {
      setError('Please fill in all fields');
      return false;
    }

    if (isNaN(phone)) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
    };

    const clearErrorMessage = () => {
      return setTimeout(() => {
        setSuccess('');
        setError('');
      }, 5000);
    };

    const submitDataHandler = (event) => {
      event.preventDefault();

      if(!validateData()) {
        return;
      } 

      axios.post('https://pomorie-info-default-rtdb.europe-west1.firebasedatabase.app/objects.json', data)
      .then(response => {
        if(response) {
          console.log(response);
          setSuccess('Information successfully sent!');
        }
      })
      .catch(error => {
        setError('Something went wrong, please try again')
         console.log(error);
      });
      
      clearErrorMessage();
    };


  return (
    <>
      <CustomCard>
        <h2>Sending post request to firebase, working with forms</h2>
        <div className={classes.formWrapper}>
          <form className={classes.form} onSubmit={submitDataHandler}>
            <div className="success"><p>{success ? success : error}</p></div>
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
            <button className={classes.submit}>Submit</button>
          </form>
        </div>
      </CustomCard>
    </>
  );
};
