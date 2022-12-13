import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./Styles/main.css";
import Editor from "./Pages/Editor";
import RegisteredUserDashboard from "./Pages/RegisteredUserDashboard";
import { Route, Routes } from "react-router-dom";
import AllTemplates from "./Components/AllTemplates";
import PortfolioCategory from "./Components/PortfolioCategory";
// import LandingPage from "./Pages/LandingPage";
// import Editor from "./Pages/Editor";
// import LandingPage from "./Pages/LandingPage";
// import LandingPage1 from "./Pages/LandingPage1";
// import UserAccount from "./Pages/UserAccount";
import Home from "./Pages/Home";
import Onboarding from "./Pages/Onboarding";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";
import Insight from "./Components/Insight";
import PasswordReset from "./Components/PasswordReset";
import ForgetPassword from "./Components/ForgetPassword";
import ConfirmPassword from "./Components/ConfirmPassword";
import BusinessCategory from "./Components/BusinessCategory";
import BlogCategory from "./Components/BlogCategory";
import ChangePassword from "./Components/ChangePassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Dashboard" element={<RegisteredUserDashboard />}>
          <Route index element={<AllTemplates />} />
          <Route
            path="/Dashboard/portfolioCategory"
            element={<PortfolioCategory />}
          />
          <Route path="/Dashboard/insights" element={<Insight />} />
          <Route
            path="/Dashboard/businessCategory"
            element={<BusinessCategory />}
          />
          <Route path="/Dashboard/blogCategory" element={<BlogCategory />} />
        </Route>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="onBoarding" element={<Onboarding />}>
          <Route index element={<Signup />} />
          <Route path="/onBoarding/signin" element={<SignIn />} />
        </Route>
        <Route path="passwordreset" element={<PasswordReset />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="confirmpassword" element={<ConfirmPassword />} />
        <Route path="changepassword" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;

