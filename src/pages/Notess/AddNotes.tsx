import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const AddNotes: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // State for note title
  const [content, setContent] = useState(""); // State to hold editor content
  const [category, setCategory] = useState("Personal"); // State for category
  const [error, setError] = useState(""); // State to handle validation error
  // Handle content change in the editor
  const handleContentChange = (value: string) => {
    setContent(value);
    setError(""); // Reset the error when content changes
  };
  const getUserIdFromToken = (token: string) => {
    if (!token) return null;
    const payload = token.split(".")[1]; // Ambil payload
    const decodedPayload = JSON.parse(atob(payload)); // Dekode dari base64
    return decodedPayload.userId; // Ganti dengan nama field yang sesuai
  };
  // Fungsi untuk menyimpan catatan ke backend
  const saveNoteToAPI = async () => {
    const token = localStorage.getItem("token");
    const UserId = getUserIdFromToken(`${token}`);
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    try {
      const response = await axios.post(
        "https://d09jsw8q-3000.asse.devtunnels.ms/catatan/insert/notes",
        {
          title, // Mengirimkan judul
          isi_catatan: content, // Mengirimkan isi catatan ke API
          category, // Mengirimkan kategori ke API
          UserId, // Mengirimkan ID pengguna ke API
        },
        {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        }
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };
  // Handle form submission
  const handleConfirm = async () => {
    if (title.trim() === "") {
      setError("Title cannot be empty!");
    } else if (content.trim() === "" || content === "<p><br></p>") {
      setError("Notes cannot be empty!");
    } else {
      console.log("Note content:", content);
      // Panggil fungsi untuk menyimpan catatan ke backend
      await saveNoteToAPI();
      navigate(-1); // Navigate back after saving
    }
  };
  // const handleCalendarClick = () => {
  //   // Tampilkan input date
  //   const dateInput = document.createElement('input');
  //   dateInput.type = 'date';
  //   dateInput.classList.add('custom-date-input'); // Tambahkan kelas untuk styling

  //   // Posisikan input date di bawah tombol
  //   const buttonElement = document.querySelector('.custom-calendar-button');
  //   buttonElement.parentNode.insertBefore(dateInput, buttonElement.nextSibling);

  //   // Ketika nilai input berubah, tambahkan ke konten Quill
  //   dateInput.addEventListener('change', (event) => {
  //     const quill = document.querySelector('.ql-editor');
  //     const range = quill.quill.getSelection();
  //     quill.quill.insertText(range.index, event.target.value, 'user');

  //     // Hapus input date setelah dipilih
  //     dateInput.remove();
  //   });
  // };
  // Extended toolbar options, including image upload, headers, and more
  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"], // remove formatting button
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#2D2D2D] text-white font-sans">
      {/* Header */}
      <header className="bg-[#514F4F] p-4 flex justify-between items-center">
        <h1 className="text-xl">Memoir</h1>
        <nav className="flex items-center">
          <a href="#" className="mr-4">
            Home
          </a>
          <i className="fas fa-user"></i>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-[#514F4F] p-4 rounded-lg w-3/4 max-w-2xl">
          <button
            className="text-white mb-4"
            onClick={() => navigate(-1)} // Navigate back
          >
            &lt; Back
          </button>
          <div className="bg-black p-4 rounded-lg">
            {/* Input for Title */}
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-white text-black"
            />
            {/* Dropdown for Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-white text-black"
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Hobby">Hobby</option>
              <option value="Reminder">Reminder</option>
              <option value="Other">Other</option>
            </select>
            {/* Quill Editor */}
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleContentChange}
              modules={{ toolbar: toolbarOptions }} // Extended toolbar
              className="bg-white text-black"
            />
            {/* Error message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-1 rounded"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-[#514F4F] p-4 text-center">
        <p className="text-lg">Memoir</p>
        <p>by: Daffa Pratama | 2024</p>
      </footer>
    </div>
  );
};
export default AddNotes;
