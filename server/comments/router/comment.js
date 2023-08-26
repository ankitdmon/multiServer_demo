const express = require("express");
const router = express.Router();
const { createComment, getAllComments } = require("../controller/commentController");

router.post("/createComment", createComment); 
router.get("/getAllComments", getAllComments);

module.exports = router;