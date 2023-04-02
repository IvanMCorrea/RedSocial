import React, { useState, useEffect } from "react";
import { UserModel } from "../types";
import Pagination from "../components/Pagination";
import ProfileCard from "../components/ProfileCard";
import Buscador from "../components/Buscador";
import { getUsers } from "../api/auth";

const Network = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, updatePageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [network, setNetwork] = useState<Array<UserModel>>([]);
  
  const getUserNetwork = async () => {
    const res = await getUsers(pageNumber, keyword);
    if (res.success) {
      setNetwork(res.data);
      setTotalPages(res.totalPages);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getUserNetwork();
  }, [pageNumber, keyword]);

  
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
