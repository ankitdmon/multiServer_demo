const { randomBytes } = require("crypto");
const axios = require("axios");
const { broker_URL } = require("../event");
const commentsByPostId = {};

exports.createComment = async (req, res) => {
  try {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const comments = commentsByPostId[req.params.postId] || [];

    comments.push({ id: commentId, content });
    commentsByPostId[req.params.postId] = comments;

    axios.post(broker_URL, {
      type: "Comment Creted",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
      },
    });

    res.status(201).send(comments);
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getAllComments = async (req, res) => {
  try {
    res.send(commentsByPostId[req.params.postId] || []);
  } catch (error) {
    console.log(error);
    return error;
  }
};
