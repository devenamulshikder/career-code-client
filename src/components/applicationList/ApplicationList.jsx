/* eslint-disable no-unused-vars */
import { use } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUserTie,
  FaEnvelope,
  FaInfoCircle,
  FaRegEdit,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Applications
          </h1>
          <p className="text-gray-600">
            Track all your job applications in one place
          </p>
          <div className="mt-4 flex items-center">
            <div className="bg-[#3282B8]/10 text-[#0F4C75] px-4 py-2 rounded-full text-sm font-medium">
              Total Applications: {applications.length}
            </div>
          </div>
        </motion.div>

        {/* Applications Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-[#3282B8]/10 to-[#0F4C75]/10">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaBuilding className="mr-2" /> Company
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaUserTie className="mr-2" /> Position
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2" /> Status
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application, idx) => (
                  <motion.tr
                    key={application._id}
                    whileHover={{ backgroundColor: "rgba(50, 130, 184, 0.05)" }}
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
                              application.company_logo ||
                              "https://via.placeholder.com/150?text=Company"
                            }
                            alt={application.company}
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/150?text=Company";
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {application.company}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {application.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {application.jobType || "Full-time"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          application.status === "Submitted"
                            ? "bg-blue-100 text-blue-800"
                            : application.status === "Reviewed"
                            ? "bg-purple-100 text-purple-800"
                            : application.status === "Interview"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {application.status || "Submitted"}
                      </span>
                    </td>
                    <td className=" py-4 flex justify-center items-center gap-5 whitespace-nowrap text-right text-sm font-medium">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-red-600 cursor-pointer hover:text-red-500 flex items-center"
                      >
                        <MdDelete size={25} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-green-600 cursor-pointer hover:text-green-400 flex items-center"
                      >
                        <FaRegEdit size={20} />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {applications.length === 0 && (
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
                No applications yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by applying to your first job!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
