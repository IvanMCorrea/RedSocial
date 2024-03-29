import React, { useEffect, useState } from "react";
import { PostModel, UserModel } from "../types";
import { getUserInfo } from "../api/auth";
import { getUserPosts } from "../api/post";
import Post from "../components/Post";

const Profile = () => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [posts, setPosts] = useState<Array<PostModel>>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getUserInfo();
    if (data.success) {
      setUser(data.user);
      const res = await getUserPosts(data.user._id);
      if (res.success) {
        setPosts(res.data);
      }
    }
  };
  return (
    <section>
      <article className="bg-slate-50 text-center flex flex-col items-center mx-auto border rounded-3xl mt-10 overflow-hidden font-semibold w-3/5 mb-5">
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
      <section>
        {posts &&
          posts[0] &&
          posts.map((post, index) => <Post post={post} key={index} />)}
      </section>
    </section>
  );
};

export default Profile;
