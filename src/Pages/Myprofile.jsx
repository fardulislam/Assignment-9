import React, { useContext } from "react";
import { AuthContext } from "../Contex/AuthContext";
import {  useNavigate } from "react-router";

const Myprofile = () => {
  const { user, loading } = useContext(AuthContext);
  const navitate = useNavigate()
  console.log(user);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (!user) {
    return <p className="text-center text-red-500">No user found</p>;
  }
  return (
   <div >
     <div className="max-w-md mx-auto my-10 p-5 shadow rounded flex flex-col items-center justify-center space-y-1 bg-gray-400">
      <img
        className="h-[80px] w-[80px] rounded-full mx-auto"
        src={
          user?.photoURL ||
          "https://i.ibb.co.com/mVq8rsrb/photo-1610568781018-995405522539.avif"
        }
        alt=""
      />
      <h2 className="text-xl font-bold text-center mt-4">{user.displayName}</h2>
      <p className="text-center">{user.email}</p>
      <button onClick={() => navitate("/editprofile")} className="btn btn-primary items-center  px-22">Edit</button>
    </div>
   </div>
  );
};

export default Myprofile;
