import React, { useEffect, useState } from "react";
import axios from "axios";
import { POST_API_URL } from "../api";
import CommentCreate from "./commentCreate";
import CommentList from "./commentList";

const ListPost = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${POST_API_URL}/getAllPosts`);
      setPosts(response.data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default ListPost;
