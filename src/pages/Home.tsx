import React, { useMemo, useState, useEffect } from "react";
import { getAllPosts, updateLike } from "../api/post";
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
    await getPosts()
  }, [pageNumber]);

  const getPosts = async () => {
    const res = await getAllPosts(pageNumber);
    if (res.success) {
      setPosts(res.data);
      setTotalPages(res.totalPages);
    }
  }

  useEffect(() => {
    getUserId()
  }, [])

  const getUserId = async () => {
    const response = await getUserInfo()
    if (response.success) {
      setUserId(response.user._id);
    }
  }
  

  const handleLike = async ( postId:string ) =>{
    const response = await updateLike(postId, userId)
    if (response.success) {
      const res = await getAllPosts(pageNumber);
      if (res.success) {
        setPosts(res.data);
        setTotalPages(res.totalPages);
      }
    }
  }
  return (
    <>
      <NewPost getPosts={getPosts}/>
      {posts &&
        posts[0] &&
        posts.map((post, index) => <Post key={index} post={post} userId={userId} handleLike={handleLike}/>)}
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        updatePageNumber={updatePageNumber}
      />
    </>
  );
};

export default Home;
