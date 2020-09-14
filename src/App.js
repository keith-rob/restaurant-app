import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Navbar />
          <Header />

          <Switch>
            <Route exact path="/">
              {" "}
              <Home />
            </Route>
            <Route path="/home">
              {" "}
              <Home />
            </Route>
            <Route path="/shop">
              {" "}
              <Shop />
            </Route>
            <Route path="/cart">
              {" "}
              <Cart />
            </Route>
          </Switch>
        </Router>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
