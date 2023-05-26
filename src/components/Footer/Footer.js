import React, { useRef, useState } from "react";
import { footerContacts, footerWebsites } from "../mock-data/data";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export const Footer = () => {
  const [error, setError] = useState('Абонирай се');
  const emailRef = useRef('');

    const renderContacts = footerContacts.map((contact) => {
      return (
      <li key={contact.info}>
        {contact.icon} {contact.info}
      </li>
      );
    });

    const renderSites = footerWebsites.map((site) => {
      return (
      <li key={site.text}>
        <Link to={site.link}>{site.text} </Link>
      </li>
      );
    });

    const validateData = () => {
        const email = emailRef.current.value;

        if( !email.includes('@') || email.length <= 6) {
            return setError(`Моля, въведете валиден e-mail`);
        } else {
            emailRef.current.value = '';
            setError(`Благодаря`);
        };
    };

    const formChangeHandler = (event) => {
        event.preventDefault();
        if(!validateData()) {
            return;
        };
    };

  return (
    <footer>
      <div className={classes["footer-wrapper"]}>

        <div className={classes["footer-column"]}>
          <p>Контакти</p>
          <ul>{renderContacts}</ul>
        </div>

        <div className={classes["footer-column"]}>
          <p>Сайтове</p>
          <ul>{renderSites}</ul>
        </div>

        <div className={classes["footer-column"]}>
          <p>{error}</p>
          <form onSubmit={formChangeHandler}>
            <input type='text' name='subscribe' placeholder='username@myemail.com' ref={emailRef}></input>
            <button className={classes.subscribe}>subscribe</button>
          </form>
        </div>

      </div>
      <div>
        <p>Code and design by Radoslav Stefanov 2023.</p>
      </div>
    </footer>
  );
};
