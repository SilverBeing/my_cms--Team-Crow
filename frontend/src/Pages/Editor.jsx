import React, { useState, useEffect } from "react";
// import Logo from "../Assets/Images/Logo.svg";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { API_HOST } from "./api_utils";
import geditorConfig from "../Api_utils/editorConfig";
import SideBarEditor from "../Components/SideBarEditor";
import TopNavEditor from "../Components/TopNavEditor";
import PageSection from "../Components/PageSection";
import RegisteredUserNavbar from "../Components/RegisteredUserNavbar";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const { pageId } = useParams();

  // const { pageStore } = useSelector((state) => state);
  // const { pages } = pageStore;

  // useEffect(() => {
  //   async function getAllAssets() {
  //     try {
  //       const response = await axios.get(`${API_HOST}assets/`);
  //       setAssets(response.data);
  //     } catch (error) {
  //       setAssets(error.message);
  //     }
  //   }

  //   getAllAssets();
  // }, []);

  useEffect(() => {
    const editor = geditorConfig(assets, pageId);
    setEditor(editor);
  }, []);
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
        {/* <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 mx-auto ">
              <img src={Logo} alt="" />
            </span>
          </div>
        </nav> */}
        <PageSection />
        <SideBarEditor />
      </div>
    </div>
  );
};

export default Editor;
