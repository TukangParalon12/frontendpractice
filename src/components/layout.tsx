//import React, { useEffect, useState } from "react";
import {Outlet, useLocation, useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);

  console.log(location.pathname);

//   const menuItems = [
//     {
//       title: "Login",
//       path: "/",
//     },
//     {
//       title: "Sigup",
//       path: "/Login/Sign up",
//     },
//    ]; 

  return (
    <div className="flex h-screen bg-[#bdbdbd]">
      {/* Navbar */}
      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <header className="bg-[#D9D9D9] shadow-sm w-full z-10">
        <div className="relative bg-white w-full h-20 flex items-center justify-between px-10">
      <div className="text-3xl font-bold">Memoir</div>
      <div className="flex space-x-6">
        <div className="relative w-[84px] h-[36px] cursor-pointer hover:text-gray-500">
          Home
        </div>
        <div className="relative w-[85px] h-[36px] cursor-pointer hover:text-gray-500">
          Notes
        </div>
        <div className="relative w-[52px] h-[58px]">
          {/* Replace with your profile icon */}
          <img src="/person-svgrepo-com 1.svg" alt="Profile" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
        </header>

        {/* Main content area */}
        <main
          className={`flex-1 p-6 overflow-auto`}
        >
          {navigation.state !== "idle" && (
            <p className="fixed top-0 right-0 bg-yellow-100 p-2 rounded">
              Navigation in progress...
            </p>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;