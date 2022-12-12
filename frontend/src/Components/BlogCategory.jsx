import React from "react";
import { Link } from "react-router-dom";
import BlogTemplate from "./BlogTemplate";

const BlogCategory = () => {
  return (
    <>
      <div className="main_content">
        <h2 className="all_temlates_heading">Choose Blog template</h2>
        <div className="create_content">
          <Link to="/editor">
            <p>Customize your own Template</p>
          </Link>
        </div>
        <div className="create_content">
          <h2 className="choose_template">Choose Templates</h2>
        </div>
        <BlogTemplate />
      </div>
    </>
  );
};

export default BlogCategory;
