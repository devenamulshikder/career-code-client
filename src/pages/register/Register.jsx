/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import registerLottie from "../../assets/lotties/register2.json";
import { use } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
export const Register = () => {
  const { createUser, loading, setLoading, socialSignin } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      name,
      photo,
      email,
      password,
    };
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration successful!");
        navigate(location?.state ? location?.state : "/");
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    socialSignin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state ? location?.state : "/");
        toast.success("Google Sign In successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <title>Career Code | Register</title>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="hidden my-auto p-4 bg-cover lg:block lg:w-1/2">
          <Lottie animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              src="https://i.postimg.cc/FKwHpfHx/career-code.png"
              alt=""
              width={50}
            />
          </div>
          <p
            style={{
              background: "linear-gradient(to right, #3282B8, #0F4C75)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-2xl text-center text-gray-600 "
          >
            Create Your Account!
          </p>
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(15, 76, 117, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleSignin}
            className="flex items-center cursor-pointer justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 w-full "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <span className="w-5/6 px-4 py-3 font-semibold text-center">
              {loading ? (
                <span className="animate-spin flex items-center justify-center ">
                  <ImSpinner9 size={26} />
                </span>
              ) : (
                "Sign Up with Google"
              )}
            </span>
          </motion.button>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase ">
              or sign up with email
            </span>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSignup}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
                Your Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#3282B8]"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
                Your Photo URL
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#3282B8]"
                type="text"
                name="photo"
                required
                placeholder="Enter your Photo URL"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
                Your Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#3282B8]"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#3282B8]"
                type="password"
                name="password"
                required
                placeholder="********"
              />
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(15, 76, 117, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full cursor-pointer px-6 py-3 md:text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-[#3282B8] focus:ring-opacity-50"
                style={{
                  background: "linear-gradient(to right, #3282B8, #0F4C75)",
                }}
              >
                {loading ? (
                  <span className="animate-spin flex items-center justify-center ">
                    <ImSpinner9 size={26} />
                  </span>
                ) : (
                  "Sign Up"
                )}
              </motion.button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link
              to={"/login"}
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
