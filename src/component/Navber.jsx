import React, { useContext } from "react";
import Mylinks from "./Mylinks";
import logo from "../assets/green plants icon.jpg";
import { AuthContext } from "../Contex/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const Navber = () => {
  const { user, signoutuserfunc, setuser ,loading,setloading} = useContext(AuthContext);
  console.log(user);

  // sign out //
  const hendlesignout = () => {
    signoutuserfunc()
      .then(() => {
        toast.success("signout successful");
        setuser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  console.log(loading)
  const links = (
    <>
      <ul className="flex justify-center gap-5 items-center">
        <li>
          <Mylinks to={"/"}>Home</Mylinks>
        </li>
        <li>
          <Mylinks to={"/plants"}>Plants</Mylinks>
        </li>
        { user && (<li>
          <Mylinks to={"/profile"}>Profile</Mylinks>
        </li>)}
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
           {loading? (<span className="loading loading-dots loading-md "></span>) : user ? (
            <div className=" text-center navbar-end dropdown dropdown-end">
              
              <button
                className=""
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <img
                  className="h-[40px] w-[40px] rounded-full mx-auto"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/mVq8rsrb/photo-1610568781018-995405522539.avif"
                  }
                  alt=""
                />
              </button>

              <div
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="">{user?.email}</p>
                <button
                  className="w-full btn btn-neutral mt-4 hover:scale-105 transition-transform duration-200"
                  onClick={hendlesignout}
                >
                  sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <a className="btn btn-primary "><Link to={'/signin'}>Sign in</Link></a>
            </div>
          )}
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
