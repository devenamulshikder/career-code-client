import { Link, NavLink } from "react-router";
export const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm top-0 sticky z-50">
      <div className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-lg hover:bg-transparent"
                      : "text-[16px] relative cursor-pointer"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-lg hover:bg-transparent"
                      : "text-[16px] relative cursor-pointer"
                  }
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/findmore"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-lg hover:bg-transparent"
                      : "text-[16px] relative cursor-pointer"
                  }
                >
                  Find More
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-lg hover:bg-transparent"
                      : "text-[16px] relative cursor-pointer"
                  }
                >
                  About
                </NavLink>
              </ul>
            </div>
            <div className="navbar-start md:flex">
              <Link to="/" className="flex items-center gap-2">
                <img
                  width={40}
                  src="https://i.postimg.cc/FKwHpfHx/career-code.png"
                  alt="Career Code Logo"
                  className="h-auto "
                />
                <span
                  className="text-2xl font-bold hidden md:block"
                  style={{
                    background: "linear-gradient(to right, #3282B8, #0F4C75)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Career Code
                </span>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-7 text-lg items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                    : "text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                    : "text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/dsf"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                    : " text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Find More
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                    : "text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end text-lg gap-3 mr-3 md:gap-6 md:mr-6">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                  : "text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#3282B8] to-[#0c3856] bg-clip-text text-transparent text-xl hover:bg-transparent border-[#3282B8] border-b-3"
                  : "text-xl relative after:bg-[#3282B8] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
