import React, { useContext, useState } from "react";
import { AuthContext } from "../Contex/AuthContext";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await updateProfile(user, { displayName, photoURL });
      toast.success("Profile updated!");
      navigate("/profile"); // redirect back to profile
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="max-w-md p-5 shadow rounded bg-white w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        <input
          className="input input-bordered w-full mb-2"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
        />
        <input
          className="input input-bordered w-full mb-2"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
        />
        <button className="btn btn-success mt-2 w-full" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
