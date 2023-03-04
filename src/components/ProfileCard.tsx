import React from "react";

const ProfileCard = ({ user }: any) => {
  return (
    <article
      key={user.id}
      className="bg-slate-50 text-center flex flex-col items-center mx-auto border rounded-3xl mt-6 overflow-hidden font-semibold"
    >
      <p className="py-3">{user.name}</p>
      <img src={user.image} alt={user.name} />
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
