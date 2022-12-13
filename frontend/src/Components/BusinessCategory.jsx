import React from "react";
import BusinessTemplate from "./BusinessTemplate";
import { Link } from "react-router-dom";

const BusinessCategory = () => {
  return (
    <>
      <div className="main_content">
        <h2 className="all_temlates_heading">Choose Business template</h2>
        <div className="create_content">
          <Link to="/editor">
            <p>Customize your own Template</p>
          </Link>
        </div>
        <div className="create_content">
          <h2 className="choose_template">Choose Templates</h2>
        </div>
        <BusinessTemplate />
      </div>
    </>
  );
};

export default BusinessCategory;
