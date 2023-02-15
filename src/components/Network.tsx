import React, { useState, useEffect, useMemo } from "react";
import { UserModel } from "../types";
import { getNetwork } from "../services/db";
import Pagination from "./Pagination";
import ProfileCard from "./ProfileCard";
import Buscador from "./Buscador";
import { getStorage } from "../services/storage";

const Network = () => {
  let pageSize = 20;
  const [loading, setLoading] = useState(false);
  const [pageNumber, updatePageNumber] = useState(1);
  const [filteredNetwork, setFilteredNetwork] = useState<Array<UserModel>>([]);
  const [network, setNetwork] = useState<Array<UserModel>>([]);
  useEffect(() => {
    setLoading(true);
    /* getUserNetwork(); */
  }, []);
  const currentData = useMemo(() => {
    const firstPageIndex = (pageNumber - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredNetwork.slice(firstPageIndex, lastPageIndex);
  }, [pageNumber, filteredNetwork]);
  /* const getUserNetwork = async () => {
    let user = getStorage();
    let username = user.username;
    const userNetwork = await getNetwork(username);
    setNetwork(userNetwork);
    setFilteredNetwork(userNetwork);
    setLoading(false);
  }; */
  return (
    <>
      {loading ? (
        <img src="portal.png" alt="portal" className="rotate scalate" />
      ) : (
        <>
          <Buscador
            parametro="user"
            setBuscador={setFilteredNetwork}
            data={network}
          />
          <section className="grid sm:grid-cols-3 lg:grid-cols-4">
            {/* Separar cards en un componente nuevo. Probar mapeo de a 30 elementos con un for*/}
            {currentData !== undefined
              ? currentData.map((user) => {
                  return <ProfileCard user={user} key={user.id} />;
                })
              : null}
          </section>
          <Pagination
            pageNumber={pageNumber}
            totalCount={filteredNetwork.length}
            updatePageNumber={updatePageNumber}
            pageSize={pageSize}
          />
        </>
      )}
    </>
  );
};

export default Network;
