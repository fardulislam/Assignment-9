import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firsebase/Firesebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const googleprovaider = new GoogleAuthProvider();

const Signin = () => {
  const [user, setuser] = useState(null);

  const [show, setshow] = useState(false);

  const hendlesignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setuser(result.user);
        toast.success("successfully sign in");
      })
      .catch((error) => {
        toast.error(error.message);
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Email or password is incorrect");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many login attempts. Try again later");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password login is not enabled");
        } else {
          toast.error("Login failed. Please try again");
        }
      });
  };

  const hendlegooglesignin = () => {
    signInWithPopup(auth, googleprovaider)
      .then((result) => {
        console.log(result);
        toast.success("google signin successful");
        setuser(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const hendlesignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("signout successful");
        setuser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(user);
  return (
    <div className="flex  flex-col md:flex-row p-20  justify-between items-center  gap-10 md:gap-30 bg-green-300">
      <div className="space-y-2 my-10  text-center md:text-start">
        <h1 className="font-bold text-2xl ">Welcome Back</h1>
        <h2 className="text-sm">
          Sign in to continue your journey. Manage your Account. Explore new
          features and more..
        </h2>
      </div>
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-6 py-5 items-center w-full max-w-md">
        {user ? (
          <div className=" text-center w-full">
            <img
              className="h-20 w-20 rounded-full mx-auto"
              src={
                user?.photoURL ||
                "https://i.ibb.co.com/mVq8rsrb/photo-1610568781018-995405522539.avif"
              }
              alt=""
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="">{user?.email}</p>
            <button
              className="w-full btn btn-neutral mt-4 hover:scale-105 transition-transform duration-200"
              onClick={hendlesignout}
            >
              sign out
            </button>
          </div>
        ) : (
          <form onSubmit={hendlesignin} action="">
            <h2 className="text-xl text-center font-semibold pb-4">
              Please Sign in
            </h2>
            <fieldset className="w-full ">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <div className=" relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setshow(!show)}
                  className=" absolute right-[10px]  bottom-3.5  cursor-pointer"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button className="w-full btn btn-neutral mt-4 hover:scale-105 transition-transform duration-200">
                Sign in
              </button>
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="h-px w-22 bg-black"></div>
                <span>or</span>
                <div className="h-px w-22 bg-black"></div>
              </div>
              <button
                onClick={hendlegooglesignin}
                className="w-full btn bg-white text-black border-[#e5e5e5] hover:scale-105 transition-transform duration-200"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
              <p className="text-center text-xs pt-2">
                Don't have an Account please?{" "}
                <Link className="text-blue-400 hover:underline" to={"/signup"}>
                  Sign up
                </Link>
              </p>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
