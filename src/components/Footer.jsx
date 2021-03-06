import React from "react";
import { withRouter } from "react-router";

const Footer = ({ history, darkMode }) => {
  const year = new Date().getFullYear();
  return (
    <div class={darkMode ? "bg-black" : "bg-white"}>
      <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
        <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <ul
            class={`${
              darkMode ? "text-white" : "text-black"
            } flex mx-auto text-center`}
          >
            <li class="p-2 cursor-pointer hover:underline">
              <p
                onClick={() =>
                  window.open("https://en.wikipedia.org/wiki/Sri_Lanka")
                }
              >
                Made with ❤ in 🇱🇰 by using,
              </p>
            </li>
          </ul>
          <ul
            class={`${
              darkMode ? "text-white" : "filter invert"
            } flex mx-auto align-center justify-center text-center`}
          >
            <li
              class="p-2 cursor-pointer"
              onClick={() => window.open("https://reactjs.org/")}
            >
              <svg
                version="1.1"
                id="Layer_2_1_"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 841.9 595.3"
                enable-background="new 0 0 841.9 595.3"
              >
                <g>
                  <path
                    fill="#fff"
                    d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z"
                  />
                  <polygon
                    fill="#fff"
                    points="320.8,78.4 320.8,78.4 320.8,78.4  "
                  />
                  <circle fill="#fff" cx="420.9" cy="296.5" r="45.7" />
                  <polygon
                    fill="#fff"
                    points="520.5,78.1 520.5,78.1 520.5,78.1  "
                  />
                </g>
              </svg>
            </li>
            <li
              class="p-2 cursor-pointer"
              onClick={() => window.open("https://www.sanity.io/")}
            >
              <svg
                viewBox="0 0 28 28"
                height="24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="3" fill="#fff"></rect>
                <path
                  d="M8.62 7.25c0 2.41 1.52 3.84 4.54 4.6l3.21.73c2.87.64 4.61 2.25 4.61 4.87a4.91 4.91 0 01-1.07 3.15c0-2.61-1.37-4.02-4.69-4.87l-3.15-.7c-2.52-.57-4.47-1.89-4.47-4.73a4.89 4.89 0 011.02-3.05z"
                  fill="#000"
                ></path>
                <path
                  d="M17.94 16.8c1.37.87 1.97 2.07 1.97 3.8-1.13 1.42-3.12 2.22-5.46 2.22-3.94 0-6.7-1.9-7.3-5.21h3.78c.48 1.52 1.77 2.22 3.5 2.22 2.1 0 3.49-1.1 3.52-3.03"
                  fill="#272727"
                ></path>
                <path
                  d="M10.59 10.82a3.99 3.99 0 01-1.97-3.57c1.1-1.4 3-2.27 5.32-2.27 4 0 6.33 2.08 6.9 5H17.2c-.4-1.15-1.4-2.05-3.23-2.05-1.96 0-3.3 1.12-3.37 2.9"
                  fill="#272727"
                ></path>
              </svg>
            </li>
            <li
              class="p-2 cursor-pointer mt-1 ml-1"
              onClick={() => window.open("https://tailwindcss.com/")}
            >
              <svg width="30" height="24" fill="#fff">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0zM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9z"
                />
              </svg>
            </li>
          </ul>
          <div
            class={`${
              darkMode ? "text-white" : "text-black"
            } flex mx-auto text-center`}
          >
            localhost443 © {year}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Footer);
