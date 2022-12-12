import React from "react";
import { toggleSidebar } from "../Api_utils/editorUtil";

const TopNavEditor = () => {
  const handleClick = () => {
    toggleSidebar(false);
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container" id="container">
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
        <div className="panel__devices"></div>
        <button className="btn btn-sm btn-toggle-side" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default TopNavEditor;
