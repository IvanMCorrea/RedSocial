import React, { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { UserModel } from "../types";
import { getUserInfo } from "../api/auth";
import avatar from "../assets/default_avatar.png";

const NavBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [userProfile, setUserProfile] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    getUser();
    setIsLoading(false);
  }, []);

  const getUser = async () => {
    const res = await getUserInfo();
    if (res.success) {
      setUserProfile(res.user);
    }
  };
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Friends?", href: "/network", current: false },
  ];
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {!isLoading && (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:justify-start">
              <div className="flex items-center">
                <Link to={"/"}>
                  <img
                    className="block h-20 w-auto mt-8 ease-in duration-150 hover:h-24"
                    src="assets/logo.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      to={item.href}
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full">
                    <span className="sr-only">Open user menu</span>
                    {userProfile && userProfile.avatar ? (
                      <img
                        className="h-12 w-12 rounded-full border-solid border-2"
                        src={userProfile.avatar}
                        alt="avatar as profile button"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar as profile button"
                      />
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={"/profile"}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={"/login"}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}
      <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default NavBar;
