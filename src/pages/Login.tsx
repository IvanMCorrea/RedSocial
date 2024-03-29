import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { startLogin } from "../api/auth";
import { useSnackbar } from "notistack";
import routes from "../router/routes";

const Login = () => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await startLogin(data);
      if (res.success) {
        enqueueSnackbar(res.msg, { variant: "success" });
        navigate(routes.home);
      } else {
        enqueueSnackbar(res.msg, { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Error al procesar datos", { variant: "error" });
    }
  };
  type FormValues = {
    username: string;
    password: string;
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-28 w-auto"
            src="assets/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-slate-200">
            Sign in
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            or{" "}
            <Link
              to={routes.register}
              className="font-medium text-lime-500 hover:text-lime-300"
            >
              create new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                {...register("username", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register("password")}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-lime-600 focus:ring-0 focus:ring-offset-0 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to={""}
                className="font-medium text-lime-500 hover:text-lime-300"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-indigo-800 hover:text-indigo-500 bg-lime-500 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
