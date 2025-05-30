/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
export const ApplicationTable = ({ application, idx, }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <>
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
                  e.target.src = "https://via.placeholder.com/150?text=Company";
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
            onClick={() => handleDelete(application._id)}
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
    </>
  );
};
