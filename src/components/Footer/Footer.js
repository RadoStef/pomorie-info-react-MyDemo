import React from "react";
import { footerContacts, footerWebsites, footerFacebookGrous } from "../mock-data/data";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import classes from "./Footer.module.css";
import { Divider } from "@mui/material";

export const Footer = () => {
  // const [submitList, setSubmitList] = useState('Абонирай се');
  // const emailRef = useRef('');

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

    const renderGroups = footerFacebookGrous.map((site) => {
      return (
        <li key={site.text}>
        <Link to={site.link}>{site.text} </Link>
      </li>
      )
    })

    // const validateData = () => {
    //     const email = emailRef.current.value;

    //     if( !email.includes('@') || email.length <= 6) {
    //         return setSubmitList(`Моля, въведете валиден e-mail`);
    //     } else {
    //         emailRef.current.value = '';
    //         setSubmitList(`Благодаря`);
    //     };
    // };

    // const formChangeHandler = (event) => {
    //     event.preventDefault();
    //     if(!validateData()) {
    //         return;
    //     };
    // };

  return (
    <footer>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-column"]}>
          <p> <ContactSupportIcon fontSize="medium"/></p>
          <Divider/>
          <ul>{renderContacts}</ul>
        </div>

        <div className={classes["footer-column"]}>
          <p> <LanguageIcon fontSize="medium"/></p>
          <Divider/>
          <ul>{renderSites}</ul>
        </div>

          {/* <p>{error}</p>
          <form onSubmit={formChangeHandler}>
            <input type='text' name='subscribe' placeholder='username@myemail.com' ref={emailRef}></input>
            <button className={classes.subscribe}>subscribe</button>
          </form> */}
        <div className={classes["footer-column"]}>
          <p><FacebookIcon fontSize="medium"/></p>
          <Divider/>
          <ul>{renderGroups}</ul>
        </div>
      </div>
      <div>
        <p>Код, дизайн и цялостна изработка: Радослав Стефанов - 2023. <Link to='https://github.com/RadoStef' target="_blank"> GitHub </Link></p>
      </div>
    </footer>
  );
};
