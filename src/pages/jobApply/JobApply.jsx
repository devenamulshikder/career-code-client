import { use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

export const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const applicationData = {
      jobId,
      name,
      email,
      linkedin,
      github,
      resume,
    };
    console.log(applicationData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3282B8]/10 to-[#0F4C75]/10 py-12 px-4 sm:px-6 lg:px-8">
      <title>Career Code | Job Application</title>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Job Application
          </h1>
          <p className="text-gray-600">
            Complete the form below to apply for this position
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaUser className="mr-2 text-[#3282B8]" />
                Your Name
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </motion.div>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-[#0F4C75]" />
                Email Address
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>
            </div>

            {/* LinkedIn Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaLinkedin className="mr-2 text-[#0077B5]" />
                LinkedIn Profile
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </motion.div>
            </div>

            {/* GitHub Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaGithub className="mr-2 text-gray-800" />
                GitHub Profile
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="url"
                  name="github"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="https://github.com/yourusername"
                />
              </motion.div>
            </div>

            {/* Resume Field */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaFileAlt className="mr-2 text-[#0F4C75]" />
                Resume/CV Link
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="url"
                  name="resume"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:border-transparent"
                  placeholder="https://drive.google.com/yourresume"
                  required
                />
              </motion.div>
              <p className="mt-2 text-sm text-gray-500">
                Upload your resume to Google Drive/Dropbox and paste the link
                here
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(15, 76, 117, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg font-semibold text-white transition-all"
              style={{
                background: "linear-gradient(to right, #3282B8, #0F4C75)",
              }}
            >
              Submit Application
            </motion.button>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              We'll contact you via email regarding your application
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
