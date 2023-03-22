import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { createPost } from "../api/post";

const NewPost = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [description, setDescription] = useState<string>("");
  const [img, setImg] = useState<Blob | null>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", description);
    if (img) formData.append("image", img);
    const res = await createPost(formData);
    if (res.success) {
      enqueueSnackbar(res.msg, { variant: "success" });
    } else {
      enqueueSnackbar(res.msg, { variant: "error" });
    }
    console.log(res);
  };
  return (
    <section>
      <article className="bg-slate-50 text-center flex flex-col items-center mx-auto border rounded-3xl mt-10 overflow-hidden font-semibold w-3/5">
        <div className="flex mr-auto ml-5 my-5 w-full">
          <div className="my-auto pl-5 text-start flex w-full">
            <p className="text w-2/12">New post</p>
            <div className="w-7/12 mx-3 px-3">
              <div className="w-full flex items-center mb-2">
                <textarea
                  id="description"
                  rows={1}
                  className="appearance-none rounded-none relative mx-auto max-w-xs w-full border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center text-sm text-gray-600">
                {img ? (
                  <span className="w-80 h-80 overflow-hidden rounded bg-gray-100">
                    <img src={URL.createObjectURL(img)} alt="profile image" />
                  </span>
                ) : null}
                <label htmlFor="file-upload">
                  <span className="text-indigo-600 font-medium ml-2 cursor-pointer">
                    Upload a file
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={(evt) => {
                      evt.target.files && setImg(evt.target.files[0]);
                    }}
                    className="sr-only"
                  />
                </label>
                <p className="ml-5 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                <p className="ml-5 text-xs text-gray-500">
                  (Recommended 1000px x 1000px)
                </p>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-2/12 h-12 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post {" >>"}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewPost;
