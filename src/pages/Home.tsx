import React, { useMemo, useState } from "react";
import { getAllPosts } from "../api/post";
import NewPost from "../components/NewPost";
import Pagination from "../components/Pagination";
import Post from "../components/Post";
import { PostModel } from "../types";
import { getUserInfo } from "../api/auth";

const Home = () => {
  const [posts, setPosts] = useState<Array<PostModel>>([]);
  const [pageNumber, updatePageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userId, setUserId] = useState<String>("");

  useMemo(async () => {
    const res = await getAllPosts();
    if (res.success) {
      setPosts(res.data.reverse());
      setTotalPages(res.totalPages);
    }
    const response = await getUserInfo()
    if (response.success) {
      setUserId(response.data._id);
    }
  }, [pageNumber]);

  useMemo(async () => {
    const response = await getUserInfo()
    if (response.success) {
      setUserId(response.data._id);
    }
  }, []);

  const handleLike = async () =>{

  }
  return (
    <>
      <NewPost setPosts={setPosts} posts={posts}/>
      {posts &&
        posts[0] &&
        posts.map((post, index) => <Post key={index} post={post} userId={userId}/>)}
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        updatePageNumber={updatePageNumber}
      />
    </>
  );
};

export default Home;
