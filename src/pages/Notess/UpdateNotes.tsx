import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const UpdateNotes: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil ID dari parameter URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");
  const [error, setError] = useState("");
  useEffect(() => {
    if (id) {
      // Ambil data catatan jika id ada
      axios
        .get(`https://d09jsw8q-3000.asse.devtunnels.ms/select/notes/${id}`)
        .then((response) => {
          const { title, isi_catatan, category } = response.data;
          setTitle(title);
          setContent(isi_catatan);
          setCategory(category);
        })
        .catch((error) => console.error("Error fetching note:", error));
    }
  }, [id]);
  const handleContentChange = (value: string) => {
    setContent(value);
    setError("");
  };
  const updateNoteToAPI = async () => {
    try {
      // Update catatan yang sudah ada
      await axios.patch(
        `https://d09jsw8q-3000.asse.devtunnels.ms/update/notes/${id}`,
        {
          title,
          isi_catatan: content,
          category,
        }
      );
      console.log("Note updated successfully");
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };
  const deleteNote = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axios.delete(
          `https://d09jsw8q-3000.asse.devtunnels.ms/delete/notes/${id}`
        );
        console.log("Note deleted successfully");
        navigate(-1); // Kembali ke halaman sebelumnya setelah menghapus catatan
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    }
  };
  const handleConfirm = async () => {
    if (title.trim() === "") {
      setError("Title cannot be empty!");
    } else if (content.trim() === "" || content === "<p><br></p>") {
      setError("Notes cannot be empty!");
    } else {
      await updateNoteToAPI();
      navigate(-1); // Kembali ke halaman sebelumnya setelah update
    }
  };
  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
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
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-[#514F4F] p-4 rounded-lg w-3/4 max-w-2xl">
          <button
            className="text-white mb-4"
            onClick={() => navigate("/Notes2")} // Navigate back
          >
            &lt; Back
          </button>
          <div className="bg-black p-4 rounded-lg">
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-white text-black"
            />
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
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleContentChange}
              modules={{ toolbar: toolbarOptions }}
              className="bg-white text-black"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={deleteNote}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-1 rounded"
                onClick={handleConfirm}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#514F4F] p-4 text-center">
        <p className="text-lg">Memoir</p>
        <p>by: Daffa Pratama | 2024</p>
      </footer>
    </div>
  );
};
export default UpdateNotes;