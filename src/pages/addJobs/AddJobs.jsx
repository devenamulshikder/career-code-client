/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { use } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaImage, FaCalendarAlt, FaMoneyBillWave, FaFileAlt, FaListUl, FaTasks, FaUserTie, FaEnvelope } from "react-icons/fa";

export const AddJobs = () => {
  const { user } = use(AuthContext);
  
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // process salary range
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    
    // process requirements
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
      
    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
      
    console.log(newJob);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3282B8]/10 to-[#0F4C75]/10 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
          <p className="text-gray-600">Fill out the form below to list your job opportunity</p>
        </div>

        <form onSubmit={handleAddAJob} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
              <FaBriefcase className="mr-2 text-[#3282B8]" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaBriefcase className="mr-2 text-[#0F4C75]" />
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="e.g. Senior React Developer"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaBuilding className="mr-2 text-[#3282B8]" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="Your company name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#0F4C75]" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="e.g. Dhaka, Bangladesh or Remote"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaImage className="mr-2 text-[#3282B8]" />
                  Company Logo URL
                </label>
                <input
                  type="text"
                  name="company_logo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="https://example.com/logo.png"
                />
              </div>
            </div>
          </div>

          {/* Job Type & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Type */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaBriefcase className="mr-2 text-[#0F4C75]" />
                Job Type
              </h2>
              
              <div className="grid grid-cols-3 gap-3">
                {['Remote', 'Hybrid', 'On-Site'].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`jobType-${type}`}
                      type="radio"
                      name="jobType"
                      value={type}
                      className="h-4 w-4 text-[#3282B8] focus:ring-[#0F4C75] border-gray-300"
                    />
                    <label htmlFor={`jobType-${type}`} className="ml-2 block text-sm text-gray-700">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Job Category */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaListUl className="mr-2 text-[#3282B8]" />
                Job Category
              </h2>
              
              <select
                name="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                required
              >
                <option value="" disabled selected>Select a category</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
              </select>
            </div>
          </div>

          {/* Deadline & Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Application Deadline */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaCalendarAlt className="mr-2 text-[#0F4C75]" />
                Application Deadline
              </h2>
              
              <input
                type="date"
                name="deadline"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                required
              />
            </div>
            
            {/* Salary Range */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaMoneyBillWave className="mr-2 text-[#3282B8]" />
                Salary Range
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Min Salary</label>
                  <input
                    type="text"
                    name="min"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                    placeholder="e.g. 50000"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Salary</label>
                  <input
                    type="text"
                    name="max"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                    placeholder="e.g. 80000"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                  <select
                    name="currency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                    required
                  >
                    <option value="" disabled selected>Select currency</option>
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
              <FaFileAlt className="mr-2 text-[#0F4C75]" />
              Job Description
            </h2>
            
            <textarea
              name="description"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
              placeholder="Describe the job responsibilities, expectations, and benefits..."
              required
            ></textarea>
          </div>

          {/* Requirements & Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaListUl className="mr-2 text-[#3282B8]" />
                Requirements
              </h2>
              
              <textarea
                name="requirements"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                placeholder="List requirements separated by commas (e.g. React, Node.js, 3+ years experience)"
                required
              ></textarea>
            </div>
            
            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <FaTasks className="mr-2 text-[#0F4C75]" />
                Responsibilities
              </h2>
              
              <textarea
                name="responsibilities"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                placeholder="List responsibilities separated by commas (e.g. Develop features, Code reviews, Team collaboration)"
                required
              ></textarea>
            </div>
          </div>

          {/* HR Info */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
              <FaUserTie className="mr-2 text-[#3282B8]" />
              HR Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaUserTie className="mr-2 text-[#0F4C75]" />
                  HR Name
                </label>
                <input
                  type="text"
                  name="hr_name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="HR representative name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 lg:flex items-center">
                  <FaEnvelope className="mr-2 text-[#3282B8]" />
                  HR Email
                </label>
                <input
                  type="email"
                  name="hr_email"
                  value={user.email}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="hr@company.com"
                  required
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(15, 76, 117, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg font-semibold text-white text-lg"
              style={{
                background: "linear-gradient(to right, #3282B8, #0F4C75)",
              }}
            >
              Post Job
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};