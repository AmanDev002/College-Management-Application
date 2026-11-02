import React from "react";
import FirstYear from "./FirstYear";
import SecondYear from "./SecondYear";
import ThirdYear from "./ThirdYear";
import Footer from "../../Components/Footer";
import { Routes, Route } from "react-router-dom";
import ExploreFirstYear from "./ExploreFirstYear";
import ExploreSecondYear from "./ExploreSecondYear";
import ExploreThirdYear from "./ExploreThirdyear";

const AllCourses = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <div className="flex justify-around p-7 items-center mt-4">
                <FirstYear></FirstYear>
                <SecondYear></SecondYear>
                <ThirdYear></ThirdYear>
              </div>
              <Footer></Footer>
            </>
          }
        ></Route>

        <Route
          path="firstyear"
          element={<ExploreFirstYear></ExploreFirstYear>}
        ></Route>

        <Route
          path="secondyear"
          element={<ExploreSecondYear></ExploreSecondYear>}
        ></Route>

        <Route
          path="thirdyear"
          element={<ExploreThirdYear></ExploreThirdYear>}
        ></Route>
      </Routes>
    </>
  );
};

export default AllCourses;
