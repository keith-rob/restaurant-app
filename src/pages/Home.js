/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { Component } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header headerText="Home" />
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "row nowrap",
          }}
        >
          <h1
            className="card card:hover"
            sx={{
              fontSize: "72px",
              color: "primary",
              backgroundColor: "highlight",
              padding: "8px 48px",
            }}
          >
            Shop our online coffee products
          </h1>
        </div>
      </div>
    </ThemeProvider>
  );
};
