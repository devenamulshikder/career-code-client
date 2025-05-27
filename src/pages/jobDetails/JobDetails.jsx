/* eslint-disable no-unused-vars */

import {
  FaBriefcase,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

export const JobDetails = () => {
  const jobDetails = useLoaderData();
  const {
    title,
    company,
    company_logo,
    location,
    description,
    requirements,
    applicationDeadline,
    salaryRange,
    experience,
    jobType,
    postedDate,
    responsibilities,
  } = jobDetails;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <title>
        Career Code | {title} at {company}
      </title>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Job Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={
                    company_logo ||
                    "https://via.placeholder.com/150?text=Company"
                  }
                  alt={company}
                  className="h-20 w-20 rounded-lg object-contain border-2 border-gray-100 p-1"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <h2 className="text-xl text-gray-700 mt-1">{company}</h2>

                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <FaLocationDot className="mr-2 text-[#3282B8]" />
                    <span>{location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FaMoneyBillWave className="mr-2 text-[#0F4C75]" />
                    <span>
                      {salaryRange.min} - {salaryRange.max}{" "}
                      {salaryRange.currency}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FaBriefcase className="mr-2 text-[#3282B8]" />
                    <span>{jobType}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FaUserTie className="mr-2 text-[#0F4C75]" />
                    <span>{experience}2+ years experience</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-[#3282B8]" />
                    <span>Posted Date Line {applicationDeadline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-4 bg-gradient-to-r from-[#3282B8]/10 to-[#0F4C75]/10">
            <Link>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(15, 76, 117, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 cursor-pointer py-3 rounded-lg font-semibold text-white"
                style={{
                  background: "linear-gradient(to right, #3282B8, #0F4C75)",
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Job Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Job Description
              </h3>
              <div className="prose text-gray-700">
                {description.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            {responsibilities && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3282B8] mt-2 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Requirements
              </h3>
              <div className="flex flex-wrap gap-2">
                {requirements.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#3282B8]/10 text-[#0F4C75] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* About Company */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About {company}
              </h3>
              <p className="text-gray-700">{responsibilities}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
