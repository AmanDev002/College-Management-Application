import { useState } from "react";
import Navbar from "./Components/Navbar";
import GroupHome from "./Pages/Home/GroupHome";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AllCourses from "./Pages/Courses/AllCourses";
import Info from "./Pages/Info/Info";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<GroupHome></GroupHome>} />

        <Route path="/courses/*" element={<AllCourses></AllCourses>}></Route>
        <Route path="/info" element={<Info></Info>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
