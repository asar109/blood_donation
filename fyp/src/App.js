import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Signin from "./components/Signin";
import BloodBanks from "./components/BloodBanks";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import UserProfileNavbar from "./components/UserProfileNavbar";
import RegisterDonor from "./components/RegisterDonor";
import UserExperience from "./components/UserExperience";
import PostRequestForm from "./components/PostRequestForm";
import HealthBlog from "./components/HealthBlog";
import FindBlood from "./components/FindBlood";
import DonorsDetails from "./components/DonorsDetails";
import ViewPosts from "./components/ViewPosts";
import LiveLocation from "./components/LiveLocation";
import Location from "./components/Location";
import ForgetPassword from "./components/ForgetPassword.js";
import ResetPassword from "./components/ResetPassword";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UpdateLocation from "./components/UpdateLocation";

const App = () => {

  useEffect(() => {
    const _id = localStorage.getItem("_id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (_id && name && email && phone && isAuthenticated) {
      setUser({
        _id,
        name,
        email,
        phone,
      });
    }
  }, []);

  const [user, setUser] = useState({});
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <>
      {isAuthenticated === "true" && location.pathname === "/userprofile" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" &&
        location.pathname === "/userexperience" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" &&
        location.pathname === "/registerdonor" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" && location.pathname === "/findblood" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" && location.pathname === "/healthblog" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" &&
        location.pathname === "/postrequestform" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" && location.pathname === "/viewposts" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" &&
        location.pathname === "/donorsdetails" ? (
        <UserProfileNavbar />
      ) : isAuthenticated === "true" &&
        location.pathname === "/livelocation" ? (
        <UserProfileNavbar />
      ) : (
        <Navbar />
      )}
      <UpdateLocation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bloodbanks" element={<BloodBanks />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/registerdonor"
          element={<RegisterDonor userId={user._id} />}
        />
        <Route path="/postrequestform" element={<PostRequestForm />} />
        <Route path="/healthblog" element={<HealthBlog />} />
        <Route path="/findblood" element={<FindBlood />} />
        <Route path="/forget/password" element={<ForgetPassword />} />
        <Route path="/donorsdetails" element={<DonorsDetails />} />
        <Route path="/userexperience" element={<UserExperience />} />
        <Route
          path="/userprofile"
          element={
            isAuthenticated === "true" ? (
              <UserProfile
                name={localStorage.name}
                email={localStorage.email}
                phone={localStorage.phone}
              />
            ) : (
              <Signin />
            )
          }
        />
        <Route path="/viewposts" element={<ViewPosts />} />
        <Route path="/livelocation" element={<LiveLocation />} />
        <Route path="/userlocation" element={<Location />} />
        <Route path="/reset/password/:token" element={<ResetPassword />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
