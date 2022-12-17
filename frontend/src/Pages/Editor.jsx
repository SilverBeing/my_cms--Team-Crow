import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import geditorConfig from "../Api_utils/editorConfig";
import SideBarEditor from "../Components/SideBarEditor";
import TopNavEditor from "../Components/TopNavEditor";
import PageSection from "../Components/PageSection";
import RegisteredUserNavbar from "../Components/RegisteredUserNavbar";

const Editor = () => {
  const [setEditor] = useState(null);
  const [assets] = useState([]);
  const { pageId } = useParams();

  useEffect(() => {
    const editor = geditorConfig(assets, pageId);
    setEditor(editor);
  });
  return (
    <div className="Editor">
      <RegisteredUserNavbar />
      <div
        className="main-content position-relative w-85 start-15"
        id="main-content"
      >
        <TopNavEditor />
        <div id="editor"></div>
      </div>
      <div
        id="navbar"
        className="sidenav d-flex flex-column overflow-scroll position-fixed"
      >
        <PageSection />
        <SideBarEditor />
      </div>
    </div>
  );
};

export default Editor;
