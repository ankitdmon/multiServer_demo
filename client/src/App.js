import React from "react";
import "./App.css";
import CreatePost from "./components/postCreate";
import ListPost from "./components/postList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <ListPost />
    </div>
  );
};

export default App;
