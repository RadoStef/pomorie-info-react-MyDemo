import React from "react";
import "./Search.css";
import { Button, TextField } from "@mui/material";

export const Search = () => {
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const focused = (event) => {
    console.log("focused", event.target.value);
  };

  const blurred = () => {
    console.log('blurred');
  }

  const changed = (event) => {
    console.log("onIput", event.target.value);
  };

  const submitted = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={searchSubmitHandler}>
        <TextField variant="outlined" name="searchfield" label="Search" onFocus={focused} onInput={changed} onBlur={blurred}/>
        <Button variant="contained" name="searchbutton" onClick={submitted}>
          Search
        </Button>
      </form>
    </div>
  );
};
