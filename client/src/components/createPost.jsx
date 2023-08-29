import React, { useState } from "react";
import axios from "axios";
import URL from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${URL}/createPost`, {
        title,
      });
      setTitle("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
