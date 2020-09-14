/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex, NavLink } from "theme-ui";

export const Navbar = () => {
  return (
    <Flex
      className="background-image"
      as="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "60px",
        backgroundColor: "muted",
      }}
    >
      <div
        sx={{
          display: "flex",
        }}
      >
        <NavLink>
          <Link
            to="/"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <h1
              sx={{
                color: "primary",
                fontFamily: "Poppins",
                fontSize: "64px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Skate
            </h1>
          </Link>
        </NavLink>
      </div>

      <div
        sx={{
          display: "flex",
        }}
      >
        <NavLink>
          <Link
            to="/home"
            sx={{
              color: "text",
              fontWeight: "bold",
              fontSize: 2,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="/shop"
            sx={{
              color: "text",
              fontWeight: "bold",
              fontSize: 2,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Shop
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="/cart"
            sx={{
              color: "text",
              fontWeight: "bold",
              fontSize: 2,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Cart
          </Link>
        </NavLink>
      </div>
    </Flex>
  );
};
