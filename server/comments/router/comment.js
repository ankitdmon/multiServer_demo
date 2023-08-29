const express = require("express");
const router = express.Router();
const { createComment, getAllComments } = require("../controller/commentController");

router.post("/createComment/:postId", createComment); 
router.get("/getAllComments/:postId", getAllComments);

module.exports = router;