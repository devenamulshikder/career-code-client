/* eslint-disable no-unused-vars */
import { use } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router";

export const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3282B8]/10 to-[#0F4C75]/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Jobs Created By You
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Manage all the job listings you've posted
            </p>
            <div className="bg-[#3282B8]/10 text-[#0F4C75] px-4 py-2 rounded-full text-sm font-medium">
              Total Jobs: {jobs.length}
            </div>
          </div>
        </motion.div>

        {/* Jobs Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-[#3282B8]/10 to-[#0F4C75]/10">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        <FaBuilding className="mr-2" /> Company
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        <FaBriefcase className="mr-2" /> Position
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        <FaBriefcase className="mr-2" /> Type
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" /> Deadline
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      View Applications
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.map((job, idx) => (
                    <motion.tr
                      key={job._id}
                      whileHover={{
                        backgroundColor: "rgba(50, 130, 184, 0.05)",
                      }}
                      className="transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover border-2 border-white shadow"
                              src={
                                job.company_logo ||
                                "https://via.placeholder.com/150?text=Company"
                              }
                              alt={job.company}
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/150?text=Company";
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {job.company}
                            </div>
                            <div className="text-sm text-gray-500">
                              {job.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {job.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            job.jobType === "Remote"
                              ? "bg-blue-100 text-blue-800"
                              : job.jobType === "Hybrid"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {job.jobType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(job.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/applications/${job._id}`}>
                          <motion.button
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 5px 15px rgba(15, 76, 117, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="px-3 cursor-pointer py-3 rounded-lg font-semibold text-white"
                            style={{
                              background:
                                "linear-gradient(to right, #3282B8, #0F4C75)",
                            }}
                          >
                            View Applications
                          </motion.button>
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                No jobs posted yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by posting your first job!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
