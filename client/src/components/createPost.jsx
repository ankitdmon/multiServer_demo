import React from "react";

const createPost = () => {
  return (
    <div>
      <form>
        <div className="form-guard">
          <label>Title</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default createPost;
