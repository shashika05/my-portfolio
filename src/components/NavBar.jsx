/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { withRouter } from "react-router";
import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";

import profileImgWhite from "../assets/profile-img-white.png";
import profileImgBlack from "../assets/profile-img-black.png";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Projects", href: "/project", current: false },
  { name: "My Story", href: "/my-story", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ history }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Disclosure as="nav" className={`${darkMode ? "bg-white" : "bg-black"}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* ---------- Mobile menu button ---------- */}
                <Disclosure.Button
                  className={`${
                    darkMode
                      ? "text-gray-500 hover:text-black hover:bg-gray-200 focus:ring-black"
                      : "text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-white"
                  } inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  className="flex-shrink-0 flex items-center cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  {/* -------------------------------------------------------------------- */}
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                  <div
                    className={`${
                      darkMode ? "logo-font-black" : "logo-font-white"
                    } block lg:hidden h-8 w-auto text-5xl mb-4`}
                  >
                    :443
                  </div>
                  <div
                    className={`${
                      darkMode ? "logo-font-black" : "logo-font-white"
                    } hidden lg:block h-8 w-auto text-3xl mb-1`}
                  >
                    localhost:443
                  </div>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <p
                        key={item.name}
                        onClick={() => history.push(`${item.href}`)}
                        className={classNames(
                          item.current
                            ? `${
                                darkMode
                                  ? '"bg-gray-50 text-black"'
                                  : '"bg-gray-900 text-white"'
                              }`
                            : `${
                                darkMode
                                  ? "text-gray-700 hover:bg-gray-200 hover:text-black "
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
                              } cursor-pointer"`,
                          "px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="hidden sm:block flex-col justify-center items-center">
                  <p
                    className={`${
                      darkMode ? "text-gray-700" : "text-gray-300"
                    } text-gray-300 text-xs text-center`}
                  >
                    Dark Mode
                  </p>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } mx-4 relative inline-flex items-center h-6 rounded-full w-14`}
                  >
                    <span className="sr-only">Enable Dark Mode</span>
                    <span
                      className={`${
                        darkMode ? "translate-x-9" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                </div>
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button
                          className={`${
                            darkMode
                              ? "bg-white focus:ring-offset-gray-100 focus:ring-black"
                              : "bg-black focus:ring-offset-gray-800 focus:ring-white"
                          } flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        >
                          <span className="sr-only">Open social menu</span>
                          <img
                            className="h-12 w-12 rounded-full object-contain"
                            src={darkMode ? profileImgBlack : profileImgWhite}
                            alt="profile-img"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className={`${
                            darkMode
                              ? "bg-black ring-white"
                              : "bg-white ring-black"
                          } origin-top-right absolute z-20 right-0 mt-2 w-12 rounded-3xl shadow-lg py-1 ring-1 ring-opacity-5 focus:outline-none`}
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block">
                                <SocialIcon
                                  url="https://www.youtube.com/channel/UCF2fKQQrgQGSmKqzcP8OEJw"
                                  className="mr-2 ml-2 mb-2 mt-2 block"
                                  target="_blank"
                                  fgColor={darkMode ? "#000" : "#fff"}
                                  style={{
                                    height: 35,
                                    width: 35,
                                  }}
                                />
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block">
                                <SocialIcon
                                  url="https://www.facebook.com/shashika.r.yasas/"
                                  className="mr-2 ml-2 mb-2 block"
                                  target="_blank"
                                  fgColor={darkMode ? "#000" : "#fff"}
                                  style={{
                                    height: 35,
                                    width: 35,
                                  }}
                                />
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block">
                                <SocialIcon
                                  url="https://www.instagram.com/shashika.raveen/"
                                  className="mr-2 ml-2 mb-2"
                                  target="_blank"
                                  fgColor={darkMode ? "#000" : "#fff"}
                                  style={{
                                    height: 35,
                                    width: 35,
                                  }}
                                />
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block">
                                <SocialIcon
                                  url="https://www.upwork.com/freelancers/~01746ebf8db384252f"
                                  className="mr-2 ml-2 mb-2"
                                  target="_blank"
                                  fgColor={darkMode ? "#000" : "#fff"}
                                  style={{
                                    height: 35,
                                    width: 35,
                                  }}
                                />
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block">
                                <SocialIcon
                                  url="https://www.fiverr.com/shashika05"
                                  className="mr-2 ml-2 mb-2"
                                  target="_blank"
                                  fgColor={darkMode ? "#000" : "#fff"}
                                  style={{
                                    height: 35,
                                    width: 35,
                                  }}
                                />
                              </span>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <p
                    key={item.name}
                    onClick={() => history.push(`${item.href}`)}
                    className={classNames(
                      item.current
                        ? `${
                            darkMode
                              ? "bg-gray-50 text-black"
                              : "bg-gray-900 text-white"
                          }`
                        : `${
                            darkMode
                              ? "text-gray-600 hover:bg-gray-200 hover:text-black"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          } cursor-pointer`,
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </p>
                ))}
                <div className="px-3 py-2 flex items-center">
                  <p className={darkMode ? "text-gray-600" : "text-gray-300"}>
                    Dark Mode
                  </p>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } mx-4 relative inline-flex items-center h-6 rounded-full w-14`}
                  >
                    <span className="sr-only">Enable Dark Mode</span>
                    <span
                      className={`${
                        darkMode ? "translate-x-9" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                </div>
              </div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default withRouter(Navbar);
