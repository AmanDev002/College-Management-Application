import React from "react";
import { BookOpen, GraduationCap, Clock, ArrowRight } from "lucide-react";

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-xl  transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
          <BookOpen size={28} />
        </div>

        <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      {/* Subject Information */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{subject.name}</h2>

      <p className="text-sm text-gray-500 mb-5">{subject.description}</p>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">Subject Code</p>
          <p className="font-semibold text-gray-700">{subject.code}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Semester</p>
          <p className="font-semibold text-gray-700">{subject.semester}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Credits</p>
          <p className="font-semibold text-gray-700">
            {subject.credits} Credits
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Subject Type</p>
          <p className="font-semibold text-gray-700">{subject.type}</p>
        </div>
      </div>

      {/* Faculty */}
      <div className="flex items-center gap-2 mt-5 bg-gray-50 p-3 rounded-xl">
        <GraduationCap size={20} className="text-blue-600" />
        <div>
          <p className="text-xs text-gray-400">Faculty</p>
          <p className="text-sm font-semibold text-gray-700">
            {subject.faculty}
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => subject.onExplore?.(subject)}
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
      >
        Explore Subject
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default SubjectCard;
