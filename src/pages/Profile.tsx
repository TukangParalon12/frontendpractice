// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Profile: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full h-screen bg-[#2D2D2D]">
//       {/* Rectangle 6 */}
//       <div className="absolute w-full h-[104px] left-0 top-0 bg-[#514F4F]"></div>

//       {/* Rectangle 7 */}
//       <div className="absolute w-[1655px] h-[1096px] left-0 top-[104px] bg-[#2D2D2D]"></div>

//       {/* Rectangle 16 */}
//       <div className="absolute w-[1699px] h-[274px] left-[-22px] top-[951px] bg-[#514F4F] rounded-[50px]"></div>

//       {/* ©by: Daffa Pratama | 2024 */}
//       <div className="absolute w-[588px] h-[54px] left-[534px] top-[1096px] font-['Bree_Serif'] text-[40px] leading-[54px] text-white">
//         ©by: Daffa Pratama | 2024
//       </div>

//       {/* Memoir */}
//       <div className="absolute w-[264px] h-[52px] left-[696px] top-[989px] font-['Kodchasan'] text-[70px] leading-[91px] text-white">
//         Memoir
//       </div>

//       {/* Group for Ellipse and Profile Icon */}
//       <div className="absolute left-[117px] top-[220px] flex items-center justify-center w-[276px] h-[276px] bg-black rounded-full">
//         {/* Person Icon */}
//         <img
//           src="src/assets/person-svgrepo-com 1.svg"
//           alt="Person Icon"
//           className="w-[109px] h-[126px]"
//         />
//       </div>

//       {/* Rectangle 19 */}
//       <div className="absolute w-[479px] h-[53px] left-[61px] top-[547px] bg-black rounded-[50px]"></div>

//       {/* Rectangle 20 */}
//       <div className="absolute w-[646px] h-[64px] left-[61px] top-[631px] bg-black rounded-[50px]"></div>

//       {/* Rectangle 22 */}
//       <div className="absolute w-[682px] h-[101px] left-[52px] top-[733px] bg-black rounded-[50px]"></div>

//       {/* Settings */}
//       <button>
//         <div className="absolute w-[101px] h-[38px] left-[102px] top-[765px] font-['Inter'] text-[25px] leading-[30px] text-white" onClick={() => navigate("/Settings")}>
//           Settings
//         </div>
//       </button>

//       {/* Username */}
//       <div className="absolute w-[238px] h-[30px] left-[98px] top-[559px] font-['Inter'] text-[25px] leading-[30px] text-[#988B8B]">
//         Username
//       </div>

//       {/* Email */}
//       <div className="absolute w-[72px] h-[30px] left-[98px] top-[648px] font-['Inter'] text-[25px] leading-[30px] text-[#988B8B]">
//         Email
//       </div>

//       {/* Memoir */}
//       <div className="absolute w-[150px] h-[52px] left-[52px] top-[29px] font-['Kodchasan'] text-[40px] leading-[52px] text-white">
//         Memoir
//       </div>

//       {/* image 3 */}
//       <div className="absolute w-[41px] h-[56px] left-[666px] top-[756px] bg-[url('/path/to/your/image.png')]"></div>

//       {/* Home Button */}
//       <button onClick={() => navigate("/Home")}>
//         <div className="absolute right-[111px] top-[32px] flex gap-4">
//           <div className="text-white text-[24px]">Home</div>
//         </div>
//       </button>

//       {/* Notes Button */}
//       <button onClick={() => navigate("/Notes")}>
//         <div className="absolute right-[26px] top-[32px] flex gap-4">
//           <div className="text-white text-[24px]">Notes</div>
//         </div>
//       </button>

//       <div
//         className="absolute left-[40px] top-[127px] flex items-center cursor-pointer"
//         onClick={() => navigate("/Notes")}
//       >
//         <div
//           className="w-[25px] h-[25px] bg-no-repeat bg-[url('/src/assets/Back.png')] bg-contain"
//           style={{ backgroundSize: "contain" }}
//         ></div>
//         <p className="ml-2 font-['Inter'] text-[25px] leading-[30px] text-white">
//           Back
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Profile;