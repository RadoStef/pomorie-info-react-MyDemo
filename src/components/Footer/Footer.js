import React from "react";
import { footerContacts, footerWebsites } from "../mock-data/data";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { ClassNames } from "@emotion/react";

export const Footer = () => {
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
          <p>Абонирай се за новости</p>
          newsletter signup form
        </div>
      </div>
      <div>
        <p>Code and design by Radoslav Stefanov 2023.</p>
      </div>
    </footer>
  );
};
