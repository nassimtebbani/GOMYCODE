import React from "react";
import classes from "./index.module.css";

function AnimalCard({ name, image, description }) {
  return (
    <div className={classes.container}>
      <p>{name}</p>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}

export default AnimalCard;
