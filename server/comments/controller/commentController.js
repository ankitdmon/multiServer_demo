exports.createComment = async (req, res) => {
  try {
    return "Comment Created!!";
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getAllComments = async (req, res) => {
  try {
    return "All Comments";
  } catch (error) {
    console.log(error);
    return error;
  }
};