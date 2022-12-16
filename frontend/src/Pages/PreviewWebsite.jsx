import React, { useContext } from "react";
import UnregisteredUserNavbar from "../Components/UnregisteredUserNavbar";
import { InfoContext } from "../Context/InfoContext";
import person from "../Assets/Images/person.png";
const PreviewWebsite = () => {
  const [info] = useContext(InfoContext);
  return (
    <>
      <UnregisteredUserNavbar />
      <div className="preview-container">
        {info?.map((data) => (
          <>
            <div className="navbar-demo">
              <div className="demo-logo">
                <span>{data.nameOfSite}</span>
              </div>
              <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Sevices</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="preview-hero">
              <div className="hero-image">
                <img src={person} alt="" />
              </div>
              <div className="hero-text">
                <h1>
                  Hello! I am <span className="name">{data.firstName}</span>
                </h1>
                <h3>
                  I am a <span className="title">{data.title}</span> and i enjoy{" "}
                  {data.dutiesOne}
                </h3>
                <div className="hero-buttons">
                  <button type="button">
                    <a href={`mailto: ${data.email}`}>Contact Me</a>
                  </button>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="about-section">
              <h2>About Me</h2>
              <p>{data.aboutMe}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default PreviewWebsite;
