import React, { useState } from "react";
import axios from "axios";
import { COMMENT_API_URL } from "../api";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(`${COMMENT_API_URL}/createComment/${postId}`, {
        content,
      });
    } catch (error) {
      console.error("Error while creating comment: ", error);
    }
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
