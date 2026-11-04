import React, { useState } from "react";
import axios from "axios";
import GlobalContext from "../../Context/GlobalContext";
import { useContext } from "react";

const UserInfo = () => {
  const { navigate } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    academicSession: "",
    currentYear: "",
    collegeName: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await axios.post(
        "http://localhost:3000/users/formInfo",
        formData,
      );

      if (response.status === 200) {
        alert("Information Saved");
        navigate("/");
      }

      // console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        fatherName: "",
        dateOfBirth: "",
        email: "",
        mobileNumber: "",
        academicSession: "",
        currentYear: "",
        collegeName: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
          Student Registration
        </h1>

        <p className="text-gray-500 mt-2">
          Please fill in your information carefully.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleOnChange}
                placeholder="Enter father's name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dob}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.phone}
                onChange={handleOnChange}
                maxLength={10}
                minLength={10}
                inputMode="numeric"
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Academic Information */}
          <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-6 border-b pb-3">
            Academic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Academic Session
              </label>
              <input
                type="text"
                name="academicSession"
                value={formData.session}
                onChange={handleOnChange}
                placeholder="2024 - 2027"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Current Year
              </label>
              <select
                name="currentYear"
                value={formData.currentYear}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">
                College Name
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleOnChange}
                placeholder="Enter college name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md cursor-pointer"
            >
              Submit Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
