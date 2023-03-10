import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ user }: any) => {
  const navigate = useNavigate()
  return (
    <article
      onClick={()=> {if (user.username) navigate(`/network/profile/${user.username}`)}}
      key={user.id}
      className="transition ease-in-out delay-25 bg-slate-50 text-center flex flex-col items-center mx-auto rounded-3xl mt-6 overflow-hidden font-semibold hover:scale-105"
    >
      <p className="py-3">{user.name}</p>
      <img src={user.avatar} alt={user.name} />
      {user.status === "Alive" ? (
        <div className="py-3 w-full bg-lime-400">{user.status}</div>
      ) : user.status === "Dead" ? (
        <div className="py-3 w-full bg-red-700 text-white">{user.status}</div>
      ) : (
        <div className="py-3 w-full bg-purple-800 text-white">
          {user.status}
        </div>
      )}
    </article>
  );
};

export default ProfileCard;
