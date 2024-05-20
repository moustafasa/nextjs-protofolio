"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import css from "./NavBar.module.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const barButtonHandler = () => {
    setShowMenu((show) => !show);
  };
  return (
    <nav
      className={`bg-blue-200 border-b-2 border-b-white w-full max-h-nav fixed z-50`}
    >
      <div className="container flex justify-between items-center">
        <h2 className="font-bold text-3xl capitalize">
          <span className="first-letter:bg-blue-300 first-letter:p-1 first-letter:me-1 first-letter:text-4xl  block uppercase text-3xl tracking-wider ">
            moustafa
          </span>
        </h2>
        <button
          className={clsx([
            "md:hidden h-nav text-2xl w-nav flex items-center justify-center hover:text-blue-300 hover:bg-white p-2 hover:shadow-100 transition-all ease-linear duration-300 hover:scale-125 relative before:absolute before:border-white before:border-4 before:border-b-transparent before:border-s-transparent before:left-0 hover:before:-translate-x-full before:transition-transform before:ease-linear before:bottom-0 after:absolute after:border-white after:border-4 after:border-b-transparent after:border-e-transparent after:right-0 hover:after:translate-x-full after:transition-transform after:ease-linear after:bottom-0 before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100",
            {
              "text-blue-300 bg-white shadow-100 scale-125 before:-translate-x-full after:translate-x-full before:opacity-100 after:opacity-100":
                showMenu,
            },
          ])}
          onClick={barButtonHandler}
        >
          <FaBars />
        </button>
        <ul
          className={clsx([
            "m-0 p-0 md:flex gap-3 capitalize md:items-center flex max-md:absolute max-md:top-full max-md:flex-col max-md:w-full max-md:left-0  max-md:translate-y-2 max-md:bg-blue-300 ",
            { hidden: !showMenu },
          ])}
        >
          <li>
            <Link className={clsx([css.navLink, css.active])} href="#About">
              About
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="#MySkills">
              my skills
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="#MyProjects">
              my MyProjects
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="#ContactMe">
              contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
