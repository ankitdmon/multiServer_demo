const { randomBytes } = require("crypto");

const commentsByPostId = {};

exports.createComment = async (req, res) => {
  try {
    const commentId = randomBytes(4).toString("hex");
    const {content} = req.body;
    const comments = commentsByPostId[req.params.postId] || [];

    comments.push({ id: commentId, content });
    commentsByPostId[req.params.postId] = comments;
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
