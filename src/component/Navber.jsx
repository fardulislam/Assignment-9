import React from "react";
import Mylinks from "./Mylinks";
import logo from '../assets/green plants icon.jpg'

const Navber = () => {
  const links = (
    <>
      <ul className="flex justify-center gap-5 items-center">
        <li>
          <Mylinks to={"/"}>Home</Mylinks>
        </li>
        <li>
          <Mylinks to={"/plants"}>Plants</Mylinks>
        </li>
        <li>
          <Mylinks to={"/profile"}>Profile</Mylinks>
        </li>
      </ul>
    </>
  );
  return (
    <div className="w-full shadow-sm">
      <div className="w-11/12 mx-auto">
        <div className="navbar bg-base-100 ">
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
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <img className="w-15 " src={logo} alt="" />
            <p className="font-bold text-xl">GreenNest</p>
          </div>
          <div className="navbar-center hidden lg:flex">{links}</div>
          <div className="navbar-end">
            <a className="btn btn-primary ">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
