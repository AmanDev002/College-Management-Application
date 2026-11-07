import React from "react";
import SubjectCard from "./FirstYearSubjectCard.jsx";
import {FirstYearSubject} from "./data.js";

const ExploreFirstYear = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">BCA Subjects</h1>

          <p className="text-gray-500 mt-2">
            Explore your subjects, syllabus and study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FirstYearSubject.map((subject) => (
            <SubjectCard key={subject.code} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreFirstYear;
