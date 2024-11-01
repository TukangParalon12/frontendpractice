import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen bg-[#2D2D2D] bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/Gambar Gunung.png')" }}
    >
      {/* Background Bar */}
      <div className="absolute top-0 left-0 w-full h-[88px] bg-[#514F4F]"></div>

      {/* Memoir Logo */}
      <div className="absolute left-[36px] top-[20px] font-['Inika'] text-[40px] leading-[52px] text-white">
        Memoir
      </div>

       {/* Notes
      <div className="absolute right-[111px] top-[48px] flex gap-4">
        <button>
          <div
            className="text-white text-[24px]"
            onClick={() => navigate("/Notes")}
          >
            Notes
          </div>
        </button>
      </div> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center font-koho font-bold text-[100px] leading-[130px] text-white">
          Write your notes
        </h1>
        <h1 className="text-center font-koho font-bold text-[100px] leading-[130px] text-white">
          with Memoir
        </h1>
        <p className="text-center font-koho text-[33px] leading-[43px] text-white mb-16">
          Welcome to Memoir, the modern daily diary app designed to help you
          capture life's moments, reflect on your experiences, and foster
          personal growth.
        </p>
        <Button size= "large" onClick={() => navigate("/register")}>Get Started</Button>
      </div>
    </div>
  );
};

export default Home;
