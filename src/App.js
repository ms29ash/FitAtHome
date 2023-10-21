import React from "react";

import "./Styles/style.css";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import "./Styles/tailwind.css";
import Home from "../src/Pages/Home";
import Navbar from "./Components/Navbar";
import Menu from "./Pages/Menu";
import TrialPage from "./Components/TrialPage";
import SubscribePage from "./Pages/SubscribePage";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ScrollToTop from "./Components/ScrollToTop";
import FoodDetails from "./Components/FoodDetails";
import ForgetPass from "./Components/Auth/ForgetPass";
import ForgetPassOtp from "./Components/Auth/ForgetPassOtp";
import Verify from "./Components/Auth/Verify";
import ForgetPassNewPass from "./Components/Auth/ForgetPassNewPass";
import NewPass from "./Components/Auth/NewPass";
import Footer from "./Components/Footer";
import Box from "./Pages/Box";
import AuthRoute from "./Components/Routes/AuthRoute";
import User from "./Pages/User";

import { Toaster } from "react-hot-toast";
import Notification from "./Pages/Notification";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/trial" element={<TrialPage />}></Route>
          <Route path="/fire" element={<SubscribePage />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
        </Route>
        <Route
          path="user"
          element={
            <AuthRoute>
              <Navbar />
              <User />
            </AuthRoute>
          }
        />
        {/* Box Routes */}
        <Route
          path="/box"
          element={
            <AuthRoute>
              <Navbar />
              <Box />
            </AuthRoute>
          }
        ></Route>

        {/* Menu Routes */}
        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Menu />} />
          <Route path=":id" element={<FoodDetails />}></Route>
        </Route>

        {/* Auth Router */}
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup">
          <Route index element={<SignUp />} />
          <Route path="verify" element={<Verify />} />
        </Route>
        <Route path="/forgetpass">
          <Route index element={<ForgetPass />} />
          <Route path="otp" element={<ForgetPassOtp />} />
          <Route path="newpass" element={<ForgetPassNewPass />} />
          <Route path="updatedpass" element={<NewPass />} />
        </Route>
      </Routes>

      <Toaster
        position="top-right"
        gutter={8}
        reverseOrder={true}
        toastOptions={{ duration: 1800 }}
        containerStyle={{ marginTop: "10vh" }}
      />
    </>
  );
}

export default App;
