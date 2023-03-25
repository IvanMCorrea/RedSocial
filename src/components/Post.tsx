import React from "react";
import { formatDate } from "../helpers/formatDate";

const Post = ({ post }: any) => {
  return (
    <article className="bg-slate-50 flex flex-col mx-auto border rounded-3xl mt-10 overflow-hidden w-3/5 p-5">
      <header className="flex justify-between w-full mb-3">
        <h1 className="font-semibold">
          {post.usernameId && post.usernameId.name}
        </h1>
        <span>{formatDate(post.createdAt)}</span>
      </header>
      <section className="flex flex-col w-full mb-3">
        {post.description && <p className="mb-3 w-full"> {post.description}</p>}
        {post.image && (
          <img
            src={post.image}
            alt={`Post image`}
            className="w-full rounded-3xl"
          />
        )}
      </section>
      <footer>
        <button>Like</button>
      </footer>
    </article>
  );
};

export default Post;
