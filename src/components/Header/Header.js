import { Transition } from "@headlessui/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(true);
  const { user, signOutUser } = useContext(AuthContext);

  // Sign out user
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto md:items-center lg:flex">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="" className="w-1/5" />
              <h2 className="text-3xl font-bold text-gray-900">Brighters</h2>
            </Link>
            <div className="lg:hidden">
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
          <div>
            <div className="hidden lg:block">
              <div className="flex md:flex-row justify-between items-end md:items-center pb-3 mt-8 md:pb-0 md:mt-0">
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
                  <li className="py-2 px-4 rounded bg-gray-900 text-white inline-block -ml-1 md:ml-0 hover:text-sky-400">
                    {user?.uid ? (
                      <button onClick={handleSignOut}>Logout</button>
                    ) : (
                      <NavLink to="/login">
                        <button>Login</button>
                      </NavLink>
                    )}
                  </li>
                </ul>
                {user?.uid ? (
                  <>
                    <p className="border h-8 border-gray-600 mx-2 md:mr-0 hidden lg:block"></p>
                    <div className="flex md:flex-col lg:flex-row justify-start ml-2 items-center text-center">
                      <div className="flex-shrink-0">
                        <div className="block relative">
                          <img
                            alt="profile"
                            src={user.photoURL ? user.photoURL : userImg}
                            className="mx-auto object-cover rounded-full h-12 w-12"
                          />
                        </div>
                      </div>
                      <span className="text-gray-900 text-sm font-medium mt-2 lg:w-6/12">
                        {user.displayName ? user.displayName : "Unknown"}
                      </span>
                    </div>
                  </>
                ) : undefined}
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={navbar}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="block lg:hidden">
              <div className="flex justify-between items-end px-6 pb-6 mt-10">
                <ul className="flex flex-col text-lg font-medium justify-center space-y-8">
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
                  <li className="py-2 px-4 -ml-1 rounded bg-gray-900 text-white inline-block  hover:text-sky-400">
                    {user?.uid ? (
                      <button onClick={handleSignOut}>Logout</button>
                    ) : (
                      <NavLink to="/login">
                        <button>Login</button>
                      </NavLink>
                    )}
                  </li>
                </ul>
                {user?.uid ? (
                  <>
                    <p className="border h-8 border-gray-600 ml-4 mr-4 md:mr-0 hidden lg:block"></p>
                    <div className="flex-row justify-center ml-4 items-center text-center">
                      <div className="flex-shrink-0">
                        <div className="block relative">
                          <img
                            alt="profile"
                            src={user.photoURL ? user.photoURL : userImg}
                            className="mx-auto object-cover rounded-full h-12 w-12"
                          />
                        </div>
                      </div>
                      <span className="text-gray-900 text-base font-medium mt-2">
                        {user.displayName ? user.displayName : "Unknown"}
                      </span>
                    </div>
                  </>
                ) : undefined}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
