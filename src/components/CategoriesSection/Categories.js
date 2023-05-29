import React from "react";
import Chip from '@mui/material/Chip';
import { menuItems } from "../mock-data/data";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "../SearchSection/Search";
import "./Categories.css";

export const Categories = () => {
  return (
    <div className="sections-container">
      <h1>обекти по категории</h1>
      <Search/>
      <div className="category-container">
        {menuItems.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
            <Button
              variant="outlined"
              size="medium"
              sx={{ color: "black", width: "250px", margin: "15px" }}
            >
              {item.text}{" "}
              <Chip 
                label={item.length === "" ? "0" : item.length} 
                color="primary" 
                size='small' 
                sx={{ marginLeft: '10px', color: item.length === '' ? 'red' : 'green', cursor: 'pointer'}} 
                variant='outlined'
              />
            </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
