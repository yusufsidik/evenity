import { useState } from "react";

import Button from "../Button.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between px-4 py-5">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="font-fredoka text-biru-gelap font-bold text-2xl md:text-[1.75rem]">
          <a className="cursor-pointer">Evenity</a>
        </h1>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined mt-[6px]">menu</span>
        </button>
      </div>

      <div
        className={`${
          !isOpen ? "hidden" : "flex"
        } md:flex gap-6 flex-col md:flex-row`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-8 md:pr-40 font-medium text-[1.12rem]">
          <li className="hover:text-sky-600">
            <a className="cursor-pointer">Home</a>
          </li>
          <li className="hover:text-sky-600">
            <a className="cursor-pointer">Pricing</a>
          </li>
          <li className="hover:text-sky-600">
            <a className="cursor-pointer">Event</a>
          </li>
          <li className="hover:text-sky-600">
            <a className="cursor-pointer">Resources</a>
          </li>
          <li className="hover:text-sky-600">
            <a className="cursor-pointer">Helpdesk</a>
          </li>
        </ul>
        <div className="flex justify-center gap-8">
          <button className="border-none bg-white text-sm md:text-[1.12rem] text-biru-gelap font-medium">
            Log In
          </button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
}
