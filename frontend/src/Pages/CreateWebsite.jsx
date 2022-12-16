import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../Context/InfoContext";
import UnregisteredUsersNavbar from "../Components/UnregisteredUserNavbar";

const CreateWebsite = () => {
  const [info, setInfo] = useContext(InfoContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/previewdemo");
  };
  const [values, setValues] = useState({
    nameOfSite: "",
    firstName: "",
    aboutMe: "",
    positionOne: "",
    positionTwo: "",
    positionThree: "",
    dutiesOne: "",
    dutiesTwo: "",
    dutiesThree: "",
    title: "",
    email: "",
    telephone: "",
  });
  const [active, setActive] = useState(true);
  const addInfo = (e) => {
    e.preventDefault();
    if (values == null) return;
    setInfo([
      ...info,
      {
        nameOfSite: values.nameOfSite,
        firstName: values.firstName,
        aboutMe: values.aboutMe,
        positionOne: values.positionOne,
        positionTwo: values.positionTwo,
        positionThree: values.positionThree,
        dutiesOne: values.dutiesOne,
        dutiesTwo: values.dutiesTwo,
        dutiesThree: values.dutiesThree,
        title: values.title,
        email: values.email,
        telephone: values.telephone,
      },
    ]);
    setValues({
      firstName: "",
      aboutMe: "",
      positionOne: "",
      positionTwo: "",
      positionThree: "",
      dutiesOne: "",
      dutiesTwo: "",
      dutiesThree: "",
      title: "",
      nameOfSite: "",
      email: "",
      telephone: "",
    });
    setActive(false);
  };
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(info);
  return (
    <>
      <UnregisteredUsersNavbar />
      <div className="website-container">
        <form onSubmit={addInfo}>
          <div className="first-section">
            <div className="detail">
              <label htmlFor="nameOfSite">Name of Site</label>
              <input
                type="text"
                name="nameOfSite"
                id="nameOfSite"
                value={values.nameOfSite}
                onChange={handleChange}
                placeholder="What would you like to call your website"
                required
              />
            </div>
            <div className="detail">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Product Designer"
                value={values.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="detail">
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your First Name"
                value={values.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="second-section">
            <h3>About You</h3>
            <div className="textarea">
              <textarea
                name="aboutMe"
                id="aboutMe"
                value={values.aboutMe}
                onChange={handleChange}
                cols="60"
                row="40"
                placeholder="Give a brief summary of who you are and your work experience, that will intrigue your potential clients."
              />

              <span>2000 Words</span>
            </div>
          </div>
          <div className="third-section">
            <h3>Your Services</h3>
            <div className="detail-container">
              <div className="detail">
                <label htmlFor="positionOne">Service</label>
                <input
                  type="text"
                  id="positionOne"
                  name="positionOne"
                  placeholder="Name of Service you offer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="detail">
                <label htmlFor="dutiesOne">Duties</label>
                <input
                  type="text"
                  id="dutiesOne"
                  name="dutiesOne"
                  placeholder="Give detail of your service"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="detail-container">
              <div className="detail">
                <label htmlFor="positionTwo">Service</label>
                <input
                  type="text"
                  id="positionTwo"
                  name="positionTwo"
                  placeholder="Name of Service you offer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="detail">
                <label htmlFor="dutiesTwo">Duties</label>
                <input
                  type="text"
                  id="dutiesTwo"
                  name="dutiesTwo"
                  placeholder="Give detail of your service"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="detail-container">
              <div className="detail">
                <label htmlFor="positionThree">Service</label>
                <input
                  type="text"
                  id="positionThree"
                  name="positionThree"
                  placeholder="Name of Service you offer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="detail">
                <label htmlFor="dutiesThree">Duties</label>
                <input
                  type="text"
                  id="dutiesThree"
                  name="dutiesThree"
                  placeholder="Give detail of your service"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="last-section">
            <h3>Contact</h3>
            <div className="detail">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="detail">
              <label htmlFor="email">Alternative Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="detail">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="Telephone"
                value={values.telephone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="button-container">
            <button
              type="submit"
              className={active ? "website-button" : "website-preview"}
              disabled={!active}
            >
              Create Website
            </button>
            <button
              type="button"
              className={active ? "website-preview" : "website-active"}
              disabled={active}
              onClick={handleNavigate}
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateWebsite;
