import React, { useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <div>
      <nav className="w-full shadow">
        <div className="justify-between px-4 pb-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="" className="w-1/5" />
                <h2 className="text-3xl font-bold text-gray-900">Brighters</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="text-lg font-medium items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                <li className="text-gray-700 hover:text-sky-500">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-gray-700 hover:text-sky-500">
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li className="text-gray-700 hover:text-sky-500">
                  <NavLink to="/faq">Faq</NavLink>
                </li>
                <li className="text-gray-700 hover:text-sky-500">
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li
                  onClick={() => setTheme(!theme)}
                  className="text-gray-700 cursor-pointer text-xl hover:text-sky-600"
                >
                  {theme ? <RiSunLine /> : <RiMoonClearLine />}
                </li>
                <li className="py-2 px-4 rounded bg-black text-white inline-block -ml-1 md:ml-0 hover:text-sky-400">
                  <NavLink to="/login">
                    <button>Login</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
