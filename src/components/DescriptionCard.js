/** @jsx jsx */

import { jsx } from "theme-ui";
import React, { Component } from "react";

export const DescriptionCard = (props) => {
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "'row nowrap",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <h3>{props.headerText}</h3>
        <p>{props.description}</p>
        <button>{props.buttonText}</button>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img className="img" src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};
