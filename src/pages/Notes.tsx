// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const AddNotes: React.FC = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState(""); // State untuk judul catatan
//   const [content, setContent] = useState(""); // State untuk isi editor
//   const [category, setCategory] = useState("Personal"); // State untuk kategori
//   const [error, setError] = useState(""); // State untuk menangani error validasi

//   // Handle perubahan konten di editor
//   const handleContentChange = (value: string) => {
//     setContent(value);
//     setError(""); // Reset error saat konten berubah
//   };

//   // Fungsi untuk mengambil UserId dari token
//   const getUserIdFromToken = (token: string) => {
//     if (!token) return null;
//     const payload = token.split(".")[1]; // Ambil payload
//     const decodedPayload = JSON.parse(atob(payload)); // Dekode dari base64
//     return decodedPayload.userId; // Ganti dengan nama field yang sesuai
//   };

//   // Fungsi untuk menyimpan catatan ke backend
//   const saveNoteToAPI = async () => {
//     const token = localStorage.getItem("token");
//     const UserId = getUserIdFromToken(`${token}`); // Ambil UserId dari token
//     try {
//       const response = await axios.post(
//         "https://d09jsw8q-3000.asse.devtunnels.ms/catatan/insert/notes",
//         {
//           title, // Mengirimkan judul
//           isi_catatan: content, // Mengirimkan isi catatan ke API
//           category, // Mengirimkan kategori ke API
//           UserId, // Mengirimkan ID pengguna ke API
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Response from backend:", response.data);
//     } catch (error) {
//       console.error("Error saving note:", error);
//     }
//   };

//   // Handle pengiriman form
//   const handleConfirm = async () => {
//     if (title.trim() === "") {
//       setError("Title cannot be empty!");
//     } else if (content.trim() === "" || content === "<p><br></p>") {
//       setError("Notes cannot be empty!");
//     } else {
//       console.log("Note content:", content);
//       // Panggil fungsi untuk menyimpan catatan ke backend
//       await saveNoteToAPI();
//       navigate(-1); // Navigasi kembali setelah menyimpan
//     }
//   };

//   // Extended toolbar options, including image upload, headers, and more
//   const toolbarOptions = [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic", "underline", "strike"],
//     [{ script: "sub" }, { script: "super" }], // superscript/subscript
//     [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//     [{ align: [] }],
//     ["link", "image", "video"],
//     ["clean"], // remove formatting button
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#2D2D2D] text-white font-sans">
//       {/* Header */}
//       <header className="bg-[#514F4F] p-4 flex justify-between items-center">
//         <h1 className="text-xl">Memoir</h1>
//         <nav className="flex items-center">
//           <a href="#" className="mr-4">
//             Home
//           </a>
//           <i className="fas fa-user"></i>
//         </nav>
//       </header>
//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-center p-4">
//         <div className="bg-[#514F4F] p-4 rounded-lg w-3/4 max-w-2xl">
//           <button
//             className="text-white mb-4"
//             onClick={() => navigate(-1)} // Navigasi kembali
//           >
//             &lt; Back
//           </button>
//           <div className="bg-black p-4 rounded-lg">
//             {/* Input untuk Judul */}
//             <input
//               type="text"
//               placeholder="Enter Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-4 p-2 rounded bg-white text-black"
//             />
//             {/* Dropdown untuk Kategori */}
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full mb-4 p-2 rounded bg-white text-black"
//             >
//               <option value="Personal">Personal</option>
//               <option value="Work">Work</option>
//               <option value="Hobby">Hobby</option>
//               <option value="Reminder">Reminder</option>
//               <option value="Other">Other</option>
//             </select>
//             {/* Quill Editor */}
//             <ReactQuill
//               theme="snow"
//               value={content}
//               onChange={handleContentChange}
//               modules={{ toolbar: toolbarOptions }} // Extended toolbar
//               className="bg-white text-black"
//             />
//             {/* Pesan Error */}
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             <div className="flex justify-end mt-4">
//               <button
//                 className="bg-gray-500 text-white px-4 py-1 rounded"
//                 onClick={handleConfirm}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//       {/* Footer */}
//       <footer className="bg-[#514F4F] p-4 text-center">
//         <p className="text-lg">Memoir</p>
//         <p>by: Daffa Pratama | 2024</p>
//       </footer>
//     </div>
//   );
// };

// export default AddNotes;
