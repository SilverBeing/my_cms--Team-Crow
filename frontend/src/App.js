import React from "react";

import "./Styles/main.css";
import Editor from "./Pages/Editor";
import RegisteredUserDashboard from "./Pages/RegisteredUserDashboard";
import { Route, Routes } from "react-router-dom";
import AllTemplates from "./Components/AllTemplates";
import PortfolioCategory from "./Components/PortfolioCategory";
import Layout from "./Pages/Layout";
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
import Products from "./Pages/Products";
import BlogTemplate from "./Components/BlogTemplate";
import PortFolioTemplate from "./Components/PortfolioTemplate";
import BusinessTemplate from "./Components/BusinessTemplate";
import AllTemplate from "./Components/AllTemplate";
import CreateWebsite from "./Pages/CreateWebsite";
import PreviewWebsite from "./Pages/PreviewWebsite";
import Documentation from "./Pages/Documentation";
import UserAccount from "./Components/UserAccount";
import Settings from "./Components/Settings";
import RequireAuth from "./Components/RequireAuth";
import Unauthorized from "./Components/Unauthorized";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
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
              <Route
                path="/Dashboard/blogCategory"
                element={<BlogCategory />}
              />
              <Route path="/Dashboard/userAccount" element={<UserAccount />} />
              <Route path="/Dashboard/settings" element={<Settings />} />
            </Route>
            <Route path="/editor" element={<Editor />} />
          </Route>

          {/* Public Routes */}
          <Route index element={<Home />}></Route>
          <Route path="products" element={<Products />}>
            <Route index element={<AllTemplate />} />
            <Route path="/products/blogTemplates" element={<BlogTemplate />} />
            <Route
              path="/products/portfolioTemplates"
              element={<PortFolioTemplate />}
            />
            <Route
              path="/products/businessTemplates"
              element={<BusinessTemplate />}
            />
          </Route>
          <Route path="onBoarding" element={<Onboarding />}>
            <Route index element={<Signup />} />
            <Route path="/onBoarding/signin" element={<SignIn />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="createdemo" element={<CreateWebsite />} />
          <Route path="/previewdemo" element={<PreviewWebsite />} />
          <Route path="passwordreset" element={<PasswordReset />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="confirmpassword" element={<ConfirmPassword />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
