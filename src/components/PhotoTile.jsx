// PhotoTile.js
import { Paper } from "@mui/material";
import React from "react";

const PhotoTile = ({ item }) => {
  return (
    <Paper>
      <div>
        <img src={item.url} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </Paper>
  );
};

export default PhotoTile;
