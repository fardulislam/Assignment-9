import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Contex/AuthContext";

const Signup = () => {
  const [show, setshow] = useState(false);

  const {
    createUserWithEmailAndPasswordfunc,
    updateProfilefund,
    sendEmailVerificationfunc,
    setloading,
    signoutuserfunc,
    setuser,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const hendlesubmit = (e) => {
    e.preventDefault();
    // console.log('click function')
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(displayName, photoURL, email, password);

    if (password.length < 6) {
      toast.error("password should be at least 6 digit");
      return;
    }
    const upperlower = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!upperlower.test(password)) {
      toast.error(
        '  "Password must contain at least one uppercase letter (A–Z) and one lowercase letter (a–z)."'
      );
      return;
    }
    const specialrex = /[@$!%*?&]/;
    if (!specialrex.test(password)) {
      toast.error("Password must include at least one special symbol.");
      return;
    }
    createUserWithEmailAndPasswordfunc(email, password)
      // createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfilefund(displayName, photoURL)
          .then((res) => {
            sendEmailVerificationfunc().then((res) => {
              console.log(res);
              setloading(false);
              if (!result.user?.emailVerified) {
                
                return;
              }
            });
            signoutuserfunc()
              .then(() => {
                toast.success(
                  "signup successful. check your email and validate your account"
                );
                setuser(null);
                navigate('/signin')
              })
              .catch((e) => {
                toast.error(e.message);
              });
            console.log(res);
            // toast.success('signup successful')
          })
          .catch((e) => {
            toast.error(e.message);
          });
        console.log(result.user);
        // toast.success("sign up successfully ");
      })
      .catch((error) => {
        console.log(error.message);

        if (error.code == "auth/email-already-in-use") {
          toast.error("user already exist in database");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("This login method is not enabled");
        } else if (error.code === "auth/requires-recent-login") {
          toast.error("Please login again to continue");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This user account has been disabled");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Popup closed before completing login");
        } else {
          toast.error("Something went wrong. Please try again");
        }
      });
  };
  return (
    <div className="flex flex-col md:flex-row px-10  justify-around items-center my-20">
      <div className="space-y-2 my-10 text-center md:text-start">
        <h1 className="text-2xl font-bold">Create your Account</h1>
        <h3 className="text-sm ">
          join our company and unlock exclusive features. Your journey begins
          here!
        </h3>
      </div>
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-15 py-5 items-center">
        <form onSubmit={hendlesubmit} action="">
          <h2 className="text-xl text-center font-semibold pb-4">
            Please Sign up
          </h2>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Your name"
              required
            />

            <label className="label">Photo</label>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder="Photo url"
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
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
            <p>
              Already have an Account Please?{" "}
              <Link className="text-blue-400 hover:underline" to={"/signin"}>
                Sign in
              </Link>
            </p>
            <button className="btn btn-neutral mt-4 hover:scale-105 transition-transform duration-200">
              Sign up
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
