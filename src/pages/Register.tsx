import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser, startLogin } from "../api/auth";
import { useSnackbar } from "notistack";
import routes from "../router/routes";
import { getAllCharacters } from "../services/getCharacters";

const Register = () => {
  let navigate = useNavigate();
  const [coverImage, setCoverImage] = useState<Blob | File | null>(null);
  const [profileImage, setProfileImage] = useState<Blob | File | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("data:", data);
      const formData = new FormData();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }
      console.log(profileImage);
      if (profileImage) formData.append("avatar", profileImage);
      if (coverImage) formData.append("image", coverImage);
      const res = await createNewUser(formData);
      if (res.success) {
        enqueueSnackbar(res.msg, { variant: "success" });
        navigate(routes.login);
      } else {
        enqueueSnackbar(res.msg, { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Error al procesar datos", { variant: "error" });
    }
  };
  type FormValues = {
    [key: string]: any;
    username: string;
    password: string;
    name: string;
    email: string;
    address: string;
    description: string;
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div>
          <img
            className="mx-auto h-28 w-auto"
            src="assets/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-slate-200">
            Register
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              to={routes.login}
              className="font-medium text-lime-500 hover:text-lime-300"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div>
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-8">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          autoComplete="username"
                          {...register("username", { required: true })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-8">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          autoComplete="password"
                          {...register("password", { required: true })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-8">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="name"
                          {...register("name")}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-8">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          id="email"
                          autoComplete="email"
                          {...register("email")}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-8">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          {...register("address")}
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          {...register("description")}
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="My description"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Profile picture
                      </label>
                      <div className="mt-1 flex items-center">
                        <div className="mt-1 flex justify-center rounded-md border-gray-300 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="h-20 w-20 overflow-hidden rounded-full bg-gray-100 mr-5">
                                {profileImage ? (
                                  <img
                                    src={URL.createObjectURL(profileImage)}
                                    alt="profile image"
                                  />
                                ) : (
                                  <svg
                                    className="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                )}
                              </span>
                              <label htmlFor="file-upload">
                                <span className="text-indigo-600 font-medium ml-2 cursor-pointer">
                                  Upload a file
                                </span>
                                <input
                                  id="file-upload"
                                  type="file"
                                  onChange={(evt) => {
                                    evt.target.files &&
                                      setProfileImage(evt.target.files[0]);
                                  }}
                                  className="sr-only"
                                />
                              </label>
                              <p className="ml-5 text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Cover photo
                      </label>
                      {coverImage && (
                        <img
                          src={URL.createObjectURL(coverImage)}
                          alt="cover image"
                        />
                      )}
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload-image"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload-image"
                                type="file"
                                onChange={(evt) => {
                                  evt.target.files &&
                                    setCoverImage(evt.target.files[0]);
                                }}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Register
                    </button>
                    {/* <button
                      onClick={(e) => {
                        e.preventDefault();
                        getAllCharacters();
                      }}
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      getAllCharacters
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
