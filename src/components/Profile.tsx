import React, { useEffect } from "react";
import { getStorage } from "../services/storage";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  let user = getStorage();
  useEffect(() => {}, []);

  return (
    <article className="text-center flex flex-col items-center mx-auto border rounded-3xl mt-10 overflow-hidden font-semibold w-3/5">
      <div className="flex mr-auto ml-5 my-5 w-4/5">
        <img src={user.image} alt={user.name} className="rounded-full w-1/6" />
        <div className="my-auto mt-auto mb-6 pl-5 text-start">
          <p className="text-4xl">{user.name}</p>
          <p className="text-md font-normal text-gray-400">
            {user.location.name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Profile;
