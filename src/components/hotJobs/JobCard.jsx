/* eslint-disable no-unused-vars */
import { FaLocationDot, FaBriefcase, FaMoneyBillWave } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";

export const JobCard = ({ jobs }) => {
  const {
    company_logo,
    title,
    company,
    location,
    salaryRange,
    requirements,
    description,
  } = jobs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="card bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Company Header */}
        <div className="flex items-center p-6 pb-0 gap-4">
          <motion.figure
            className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={company_logo}
              alt={company}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100?text=Company";
              }}
            />
          </motion.figure>

          <div>
            <h1 className="text-xl font-bold text-gray-800">{company}</h1>
            <div className="flex items-center text-gray-600 mt-1">
              <FaLocationDot className="mr-1 text-[#3282B8]" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 pt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>

          <div className="flex items-center gap-4 my-3">
            <div className="flex items-center text-gray-700">
              <FaMoneyBillWave className="mr-2 text-[#0F4C75]" />
              <span>
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaBriefcase className="mr-2 text-[#3282B8]" />
              <span>Full-time</span>
            </div>
          </div>

          <p className="text-gray-600 mb-5 line-clamp-3">{description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {requirements.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-[#3282B8]/10 text-[#0F4C75] rounded-full text-sm font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Apply Button */}
          <div className="mt-auto">
            <Link to={`/job/${jobs._id}`}>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(15, 76, 117, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all"
                style={{
                  background: "linear-gradient(to right, #3282B8, #0F4C75)",
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
