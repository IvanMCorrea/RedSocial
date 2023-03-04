import React, { useEffect, useState } from "react";
import { UserModel } from "../types";
import { getUserInfo } from "../api/auth";

const Profile = () => {
  const [user, setUser] = useState<UserModel | null>(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getUserInfo();
    setUser(data.user);
  };
  return (
    <section>
      <article className="bg-slate-50 text-center flex flex-col items-center mx-auto border rounded-3xl mt-10 overflow-hidden font-semibold w-3/5">
        {user && (
          <div className="flex mr-auto ml-5 my-5 w-4/5">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="my-auto pl-5 text-start">
              <p className="text-4xl">{user.name}</p>
              <p className="text-md font-normal text-gray-400">
                {user.address}
              </p>
              <p className="text-md font-normal text-gray-500">
                {user.description}
              </p>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Profile;
