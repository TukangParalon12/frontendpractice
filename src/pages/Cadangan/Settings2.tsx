// Settings.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Avatar, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const Settings2: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">
      {/* Header */}
      <header className="bg-[#514F4F] p-4 flex items-center relative">
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
        <div className="text-lg text-2xl ml-auto">Memoir</div>
      </header>

      {/* Profile Section */}
      <main className="flex-grow p-4 flex flex-col items-center bg-[#2D2D2D] relative">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <Upload
            name="avatar"
            showUploadList={false}
            action="/upload.do" // Update this to your upload endpoint
            onChange={handleChange}
          >
            <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
              <Avatar
                size={80} // Menyesuaikan ukuran dengan elemen di dalam bulatan hitam
                icon={<CameraOutlined style={{ fontSize: "24px" }} />} // Ikon kamera sebagai placeholder
                className="cursor-pointer"
              />
            </div>
          </Upload>
          <div className="mt-4 flex items-center space-x-2">
            <div className="text-lg">Username</div>
            <button>
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 w-full max-w-sm">
          <button
            className="bg-black w-full text-white py-3 rounded-full flex justify-center items-center"
            onClick={() => navigate("/ChangePass")}
          >
            <span className="text-center">Change Password</span>
          </button>

          <button
            className="bg-black w-full text-white py-3 rounded-full flex justify-center items-center"
            onClick={() => navigate("/ChooseLanguage")}
          >
            <span className="text-center">Language</span>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Button untuk mengarahkan ke halaman Notifications */}
          <button
            className="bg-black w-full text-white py-3 rounded-full flex justify-center items-center"
            onClick={() => navigate("/notifications")} // Mengarahkan ke halaman Notifications
          >
            <span className="text-center">Notifications</span>
            <i className="fas fa-chevron-right"></i>
          </button>

          <button
            className="bg-black w-full text-white py-3 rounded-full flex justify-center items-center"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/register");
            }}
          >
            <span className="text-center">Logout</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings2;
