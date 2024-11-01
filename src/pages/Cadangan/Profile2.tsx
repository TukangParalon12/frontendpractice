import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile2: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    image: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://d09jsw8q-3000.asse.devtunnels.ms/show", {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData({
          email: response.data.data.email,
          password: response.data.data.password,
          image: `https://d09jsw8q-3000.asse.devtunnels.ms/${response.data.data.image}`,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // Function to mask the password and limit its display length
  const maskedPassword =
    userData.password.length > 10
      ? userData.password.replace(/./g, "*").substring(0, 10) + "..."
      : userData.password.replace(/./g, "*");

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">
      {/* Header */}
      <header className="bg-[#514F4F] p-4 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div
            className="w-[25px] h-[25px] bg-no-repeat bg-[url('/src/assets/Back.png')] bg-contain"
            style={{ backgroundSize: "contain" }}
          ></div>
          <p className="ml-2 font-['Inter'] text-[25px] leading-[30px] text-white">
            Back
          </p>
        </div>
        <div className="text-lg text-2xl">Memoir</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm">
            Home
          </a>
          <a href="#" className="text-sm">
            Notes
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 flex flex-col items-center bg-[#2D2D2D]">
        {/* User Profile Icon */}
        <div className="bg-black rounded-full w-40 h-40 flex items-center justify-center mb-6">
          <img
            src={userData.image || "src/assets/person-svgrepo-com 1.svg"}
            alt="Person Icon"
            className="w-[80px] h-[126px]"
          />
        </div>

        {/* Input Fields */}
        <div className="w-full max-w-xs space-y-4">
          <div className="relative">
            <p className="w-full p-3 pl-10 rounded-full bg-[#514F4F] text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap focus:outline-none">
              {userData.email || "example@example.com"}
            </p>
          </div>
          <div className="relative">
            <p className="w-full p-3 pl-10 rounded-full bg-[#514F4F] text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap focus:outline-none">
              {maskedPassword || "********"}
            </p>
          </div>

          {/* Settings Button */}
          <button
            className="w-full p-3 bg-black text-white rounded-full flex items-center justify-between"
            onClick={() => navigate("/Settings2")}
          >
            <span>Settings</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#514F4F] p-4 text-center">
        <div className="text-lg font-bold">Memoir</div>
        <div className="text-sm mt-2">by: Daffa Pratama | 2024</div>
      </footer>
    </div>
  );
};

export default Profile2;
