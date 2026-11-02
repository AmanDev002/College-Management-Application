import React from "react";
import Hero from "./Hero";
import Register from "./Register";
import Scale from "./Scale";
import Categories from "./Categories"
import About from "./About";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Community from "./Community";
import Logo from "./Logo";
import Footer from "../../Components/Footer";

const GroupHome = () => {
  return (
    <>
      <Hero></Hero>
      <Register></Register>
      <Scale></Scale>
      <Categories></Categories>
      <About></About>
      <Courses></Courses>
      <Testimonials></Testimonials>
      <Community></Community>
      <Logo></Logo>
      <Footer></Footer>
    </>
  );
};

export default GroupHome;
