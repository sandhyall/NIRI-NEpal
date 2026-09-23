import React, { useState } from "react";
import {
  FaUserPlus,
  FaCheckCircle,
  FaPaperPlane,
  FaGlobeAsia,
  FaLightbulb,
} from "react-icons/fa";

const initialFormState = {
  fullName: "",
  email: "",
  expertise: "",
  experience: "",
  statement: "",
};

const BecomeAnInvestigator = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.expertise.trim() &&
    formData.experience.trim() &&
    formData.statement.trim();

  const handleSubmit = () => {
    if (!isFormValid) return;
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full text-amber-800 mb-4">
          <FaUserPlus className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2027] mb-4">
          Become an Investigator
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Collaborate with passionate scholars, data scientists, and field
          experts to drive high-impact social science research that shapes
          policy and community development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaLightbulb className="text-amber-700 mr-2" /> Why Join Us?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Work alongside multidisciplinary experts and academic leaders.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Gain access to unique institutional data repositories and
                  research frameworks.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Contribute to studies that influence public policy and
                  community frameworks.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaGlobeAsia className="text-amber-700 mr-2" /> Who Can Apply?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-700 rounded-full mt-2 mr-2.5 flex-shrink-0"></span>
                <span>
                  Researchers, academics, and graduate students in social
                  sciences or data fields.
                </span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-amber-700 rounded-full mt-2 mr-2.5 flex-shrink-0"></span>
                <span>
                  Professionals with background experience in qualitative or
                  quantitative field surveys.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Application Form
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the details below to submit your expression of interest to
            join our network.
          </p>

          {submitted ? (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 p-6 rounded-lg text-center space-y-3">
              <FaCheckCircle className="w-12 h-12 text-amber-700 mx-auto" />
              <h4 className="text-lg font-bold">Application Received!</h4>
              <p className="text-sm">
                Thank you for applying. Our coordination committee will review
                your information and reach out to you via email.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-900 underline hover:text-amber-950"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. Jane Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane.doe@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="expertise"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Primary Field of Expertise
                  </label>
                  <input
                    id="expertise"
                    type="text"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="e.g., Public Policy, Data Analysis"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 5+ Years"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="statement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Research Statement / Background Summary
                </label>
                <textarea
                  id="statement"
                  name="statement"
                  rows={4}
                  required
                  value={formData.statement}
                  onChange={handleChange}
                  placeholder="Briefly describe your past research works, academic focus, or why you'd like to collaborate..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center space-x-2 font-medium py-3 px-4 rounded-md transition-colors shadow-sm ${
                  isFormValid
                    ? "bg-[#0F2027] hover:bg-black text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <FaPaperPlane className="text-sm" />
                <span>Submit Application</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInvestigator;
