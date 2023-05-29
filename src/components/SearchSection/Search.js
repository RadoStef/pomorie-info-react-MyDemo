import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import classes from "./Search.module.css";


export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    setSearchValue('');
  };

  const focused = (event) => {
    console.log("focused", event.target.value);
  };

  const blurred = () => {
    console.log('blurred');
  }

  const changed = (event) => {
    console.log("onInput", event.target.value);
    setSearchValue(event.target.value);
  };

  const submitted = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const styledSearchField = {
    minWidth: '80%',
    marginRight: { md: 2 },
    marginBottom: { xs: 2, md: 0 },
    "& .MuiInputBase-input": {
      height: 20,
      paddingTop: '10px',
    },
    "& .MuiFilledInput-root": {
      '&:before': {
        borderBottom: '2px solid #FBBC05',
      },
    },
    "& .MuiFilledInput-root:hover": {
      borderBottom: '0.5px solid #00f',
      transition: 'all 0.5s',
    },
  };

  return (
    <div className={classes.searchWrapper}>
      <form className={classes.searchFormWrapper} onSubmit={searchSubmitHandler}>
        <TextField 
          variant="filled" 
          name="searchfield" 
          value={searchValue}
          onFocus={focused} 
          onInput={changed} 
          onBlur={blurred} 
          sx={styledSearchField}
        />
        <Button 
          variant="contained"
          name="searchbutton"
          onClick={submitted}
        >
          Search
        </Button>
      </form>
    </div>
  );
};
