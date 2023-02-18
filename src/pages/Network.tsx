import React, { useState, useEffect, useMemo } from "react";
import { UserModel } from "../types";
import { getNetwork } from "../services/db";
import Pagination from "../components/Pagination";
import ProfileCard from "../components/ProfileCard";
import Buscador from "../components/Buscador";
import { getStorage } from "../services/storage";
import { getUsers } from "../api/auth";

const Network = () => {
  let pageSize = 20;
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, updatePageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [network, setNetwork] = useState<Array<UserModel>>([]);
  useEffect(() => {
    setLoading(true);
    getUserNetwork();
  }, [pageNumber, keyword]);
  const getUserNetwork = async () => {
    const res = await getUsers(pageNumber, keyword);
    console.log(res);
    if (res.success) {
      setNetwork(res.data);
      setTotalPages(res.totalPages);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <img src="portal.png" alt="portal" className="rotate scalate" />
      ) : (
        <>
          <Buscador keyword={keyword} setKeyword={setKeyword} />
          <section className="grid sm:grid-cols-3 lg:grid-cols-4">
            {network !== undefined
              ? network.map((user) => {
                  return <ProfileCard user={user} key={user._id} />;
                })
              : null}
          </section>
          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            updatePageNumber={updatePageNumber}
          />
        </>
      )}
    </>
  );
};

export default Network;
