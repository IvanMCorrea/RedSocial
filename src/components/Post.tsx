import React from "react";
import { formatDate } from "../helpers/formatDate";

const Post = ({ post }: any) => {
  return (
    <article className="bg-slate-50 flex flex-col mx-auto border rounded-3xl mt-10 overflow-hidden font-semibold w-3/5">
      <header className="flex justify-between w-full p-5">
        <h1>{post.usernameId && post.usernameId.name}</h1>
        <span>{formatDate(post.createdAt)}</span>
      </header>
      <section className="flex w-full">
        {post.description && <p className="mb-3"> {post.description}</p>}
        {post.image && <img src={post.image} alt={`Post image`} />}
      </section>
    </article>
  );
};

export default Post;
