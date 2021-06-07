/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, Fragment } from "react";
import { withRouter } from "react-router";
import { Dialog, Transition } from "@headlessui/react";
import homeImg from "../assets/background-img.jpg";

const Home = ({ history }) => {
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  /// ----------====== Custom Greeting =========----------
  const greetings = [
    ["Bonjour", "French"],
    ["Hola", "Spanish"],
    ["Konnichiwa", "Japanese"],
    ["Guten Tag", "German"],
    ["Namaste", "Hindi"],
    ["Merhaba", "Turkish"],
    ["Shalom", "Hebrew"],
    ["Ayubowan", "Sinhala"],
  ];
  const greetSelector = Math.trunc(Math.random() * greetings.length);
  // const toolTipHidden = "flex absolute z-50 hidden";
  // const toolTip = "flex absolute z-50";
  console.log(
    `Here is some kind of greet for you - ${greetings[greetSelector][0]} (${greetings[greetSelector][1]})`
  );
  /// ----------====== Custom Greeting =========----------

  return (
    <div className="relative bg-white overflow-visible">
      <div on={openModal}>
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="absolute inset-0 z-10 top--80 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-image-custom shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-black coffee-font"
                    >
                      Buy me a coffee
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm  text-gray-500 App">
                        If you like to support to dev,
                        <br />
                        Now you can buy me a coffee 😊
                      </p>
                    </div>

                    <div className="mt-4 flex space-x-4">
                      <a
                        href="https://www.buymeacoffee.com/localhost443"
                        className="flex-1 bg-cover"
                        target="_blank"
                        onClickCapture={closeModal}
                      >
                        <img
                          src="https://cdn.buymeacoffee.com/buttons/v2/default-black.png"
                          alt="Buy Me A Coffee"
                          className="buycoffee"
                        />
                      </a>
                      {/* </a> */}
                      <button
                        type="button"
                        className="flex-1 App justify-center px-4 py-2 ml-4 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mx-auto max-w-7xl px-4 sm:pt-24 sm:pb-8 sm:px-8 md:pt-16 md:pb-8 lg:pt-40 lg:px-12 xl:pt-36 pt-16 pb-12">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block animate-pulse cursor-pointer">
                  {greetings[greetSelector][0]}!
                </span>
                <br />
                <span className="block xl:inline">Welcome to my</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  portfolio
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm Shashika 'localhost443' Raveen who started his developer
                carier by following JavaSctipt. Here you can learn lot of things
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <p
                    onClick={() => history.push("/blog")}
                    className="w-full flex cursor-pointer items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-black hover:bg-gray-700 hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Blog Posts
                  </p>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <p
                    onClick={() => history.push("/my-story")}
                    className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    My Story
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={homeImg}
          alt="homeImg"
        />
      </div>
    </div>
  );
};

export default withRouter(Home);
