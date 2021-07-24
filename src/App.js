import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";

import Home from "./components/Home";
import MyStory from "./components/MyStory";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import NotFound from "./components/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`App ${darkMode ? "bg-image-custom1" : "bg-image-custom2"}`}
    >
      <BrowserRouter>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>
          <Route path="/" exact>
            <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="/my-story">
            <MyStory darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="/blog/:slug">
            <SinglePost darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="/blog">
            <Post darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="/project">
            <Project darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route path="*">
            <NotFound darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
        </Switch>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
