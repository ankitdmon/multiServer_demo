import React, { useEffect, useState } from "react";
import axios from "axios";
import { COMMENT_API_URL } from "../api";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${COMMENT_API_URL}/getAllComments/${postId}`
      );
      setComments(result.data);
    } catch (error) {
      console.error("Error while fetching comments: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedData = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <div>{renderedData}</div>;
};

export default CommentList;
