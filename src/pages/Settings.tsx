// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Settings: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full h-screen flex flex-col justify-between bg-[#2D2D2D]">
//       {/* Main Content */}
//       <div className="flex flex-1 flex-col items-center justify-center">
//         {/* Profile Picture */}
//         <div className="flex flex-col items-center">
//           <div className="w-[276px] h-[276px] bg-black rounded-full flex items-center justify-center">
//             <img
//               src="src/assets/person-svgrepo-com 1.svg"
//               alt="Person Icon"
//               className="w-[109px] h-[126px]"
//             />
//           </div>
//           {/* Username Field */}
//           <div className="mt-4 w-[443px] h-[55px] bg-black rounded-[50px] flex items-center justify-center">
//             <span className="text-white text-[25px]">Username</span>
//           </div>
//         </div>

//         {/* Settings Options */}
//         <div className="mt-10 w-full flex flex-col items-start space-y-6 px-8">
//           <div className="w-full max-w-[682px] bg-black rounded-[50px] flex items-center justify-between px-6 h-[55px]">
//             <span className="text-white text-[25px]">Change Password</span>
//             <button
//               className="bg-[#2D2D2D] text-white px-6 py-2 rounded-full"
//               onClick={() => navigate("/ChangePass")}
//             >
//               Edit
//             </button>
//           </div>
//           <div className="w-full max-w-[682px] bg-black rounded-[50px] flex items-center justify-between px-6 h-[55px]">
//             <span className="text-white text-[25px]">Language</span>
//             <button className="bg-[#2D2D2D] text-white px-6 py-2 rounded-full" onClick={() => navigate("/Language")}>
//               Edit
//             </button>
//           </div>
//           <div className="w-full max-w-[682px] bg-black rounded-[50px] flex items-center justify-between px-6 h-[55px]">
//             <span className="text-white text-[25px]">Notification</span>
//             <button className="bg-[#2D2D2D] text-white px-6 py-2 rounded-full">
//               Edit
//             </button>
//           </div>
//           <button>
//             <div className="w-full max-w-[682px] bg-black rounded-[50px] flex items-center justify-between px-6 h-[55px]">
//               <span
//                 className="text-white text-[25px]"
//                 onClick={() => navigate("/register")}
//               >
//                 Logout
//               </span>
//             </div>
//           </button>
//           <div
//         className="absolute left-[40px] top-[127px] flex items-center cursor-pointer"
//         onClick={() => navigate("/Profile")}
//       >
//         <div
//           className="w-[25px] h-[25px] bg-no-repeat bg-[url('/src/assets/Back.png')] bg-contain"
//           style={{ backgroundSize: "contain" }}
//         ></div>
//         <p className="ml-2 font-['Inter'] text-[25px] leading-[30px] text-white">
//           Back
//         </p>
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;
