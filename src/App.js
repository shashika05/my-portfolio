import { BrowserRouter, Route, Switch } from "react-router-dom";

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
  return (
    <div className="App bg-image-custom">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={MyStory} path="/my-story" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
