import React, { useMemo, useState } from "react";
import { getAllPosts } from "../api/post";
import NewPost from "../components/NewPost";
import Pagination from "../components/Pagination";
import Post from "../components/Post";
import Posts from "../components/Post";
import { PostModel } from "../types";

const Home = () => {
  const [posts, setPosts] = useState<Array<PostModel>>([]);
  const [pageNumber, updatePageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useMemo(async () => {
    const res = await getAllPosts();
    if (res.success) {
      console.log(res);
      setPosts(res.data);
      setTotalPages(res.totalPages);
    }
  }, [pageNumber]);
  return (
    <>
      <NewPost />
      {posts &&
        posts[0] &&
        posts.map((post, index) => <Post key={index} post={post} />)}
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        updatePageNumber={updatePageNumber}
      />
    </>
  );
};

export default Home;
