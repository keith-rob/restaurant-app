import React from "react";
import { Heading } from "theme-ui";

export const Header = (props) => {
  return (
    <div>
      <Heading
        className="background-image"
        as="h1"
        p={4}
        bg="muted"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "primary",
        }}
      >
        {props.headerText}
      </Heading>
    </div>
  );
};
