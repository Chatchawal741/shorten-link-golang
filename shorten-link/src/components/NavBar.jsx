import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[100vw] px-4 md:px-8 lg:px-16 py-4 md:py-6  shadow-sm flex justify-between">
      {/* title */}
      <div className="flex gap-2">
        <span className="hidden md:block">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke="#5ecf60"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </span>
        <a href="/">
          <span className="font-semibold text-2xl text-green-600 cursor-pointer">
            Shorten Link
          </span>
        </a>
      </div>
      <button
        className="text-2xl font-semibold md:hidden text-green-600"
        onClick={() => setIsOpen((pre) => !pre)}
      >
        {isOpen ? "x" : "="}
      </button>
    </div>
  );
}

export default NavBar;
