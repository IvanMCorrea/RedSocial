import React, { useState, useEffect } from "react";
import { NetworkModel } from "../types";
import { getUsers } from "../services/db";

const Network = () => {
  const [network, setNetwork] = useState<Array<NetworkModel>>([]);
  useEffect(() => {
    getNetwork();
  }, []);
  const getNetwork = async () => {
    const users = await getUsers();
    setNetwork(users);
  };
  return (
    <>
      <section className="grid sm:grid-cols-3 lg:grid-cols-4">
        {network !== undefined
          ? network.map((user) => {
              return (
                <article
                  key={user.id}
                  className="text-center flex flex-col items-center mx-auto border rounded-3xl mt-6 overflow-hidden font-semibold"
                >
                  <p className="py-3">{user.name}</p>
                  <img src={user.image} alt={user.name} />
                  {user.status === "Alive" ? (
                    <div className="py-3 w-full bg-lime-400">{user.status}</div>
                  ) : user.status === "Dead" ? (
                    <div className="py-3 w-full bg-red-700 text-white">
                      {user.status}
                    </div>
                  ) : (
                    <div className="py-3 w-full bg-purple-800 text-white">
                      {user.status}
                    </div>
                  )}
                </article>
              );
            })
          : null}
      </section>
    </>
  );
};

export default Network;
