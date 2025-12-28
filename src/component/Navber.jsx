import React, { useContext } from "react";
import Mylinks from "./Mylinks";
import logo from "../assets/green_plants_icon-removebg-preview.png";
import { AuthContext } from "../Contex/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router"; // useNavigate যোগ করা ভালো

const Navber = () => {
  const { user, signoutuserfunc, setuser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const hendlesignout = () => {
    signoutuserfunc()
      .then(() => {
        toast.success("Signout successful");
        setuser(null);
        navigate("/signin"); // সাইন আউট হলে সাইন ইন পেজে নিয়ে যাবে
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // নেভিগেশন লিংকগুলো এখানে আলাদা রাখা হয়েছে
  const navLinks = (
    <>
      <li><Mylinks to="/">Home</Mylinks></li>
      <li><Mylinks to="/plants">Plants</Mylinks></li>
      {user && <li><Mylinks to="/profile">Profile</Mylinks></li>}
    </>
  );

  return (
    <div className="shadow-sm bg-base-100 w-full sticky top-0 z-50">
      <div className="w-11/12 mx-auto">
        <div className="navbar p-0">
          
          {/* Navbar Start: Logo and Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
                <img className="w-10" src={logo} alt="Logo" />
                <p className="font-bold text-xl hidden sm:block">GreenNest</p>
            </Link>
          </div>

          {/* Navbar Center: Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navLinks}
            </ul>
          </div>

          {/* Navbar End: User Profile & Buttons */}
          <div className="navbar-end gap-4">
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : user ? (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border">
                    <img 
                        src={user?.photoURL || "https://i.ibb.co/DfnvJ7rN/premium-photo.avif"} 
                        alt="User" 
                    />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li className="px-4 py-2 font-semibold text-[#0F3D2E] border-bottom">{user?.displayName || "User"}</li>
                  <li className="px-4 pb-2 text-xs opacity-70">{user?.email}</li>
                  <div className="divider my-0"></div>
                  <li><button onClick={hendlesignout} className="text-red-500">Sign Out</button></li>
                </ul>
                <Link to="/signout" className="btn btn-sm md:btn-md text-white bg-[#0F3D2E] ml-4">Sign out</Link>
              </div>
            ) : (
              <Link to="/signin" className="btn btn-sm md:btn-md text-white bg-[#0F3D2E]">Sign in</Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navber;