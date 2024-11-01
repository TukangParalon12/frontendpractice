// Isi_Notes.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const Memoir = () => {
  const { noteId } = useParams(); // Get noteId from the URL
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    date: "",
    category: "",
    content: "",
  });
  const [error, setError] = useState<string | null>(null);
  // Fetch note details by ID
  const fetchNote = async () => {
    try {
      const response = await axios.get(
        `https://d09jsw8q-3000.asse.devtunnels.ms/catatan/select/notes/:noteId`
      );

      // Check if the note has content
      if (response.data) {
        setNote(response.data);
      } else {
        setError("Note content is missing.");
      }
    } catch (error) {
      console.error("Error fetching note:", error);
      setError("Failed to load note, please try again later.");
    }
  };
  useEffect(() => {
    fetchNote();
  }, [noteId]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">
      <header className="bg-[#514F4F] p-4 flex justify-between items-center">
        <h1 className="text-lg">Memoir</h1>
        <nav className="flex items-center">
          <a href="#" className="text-white mr-4">
            Home
          </a>
        </nav>
      </header>
      <main className="bg-[#2D2D2D] flex-grow flex flex-col items-center justify-center w-full p-4">
        <div className="w-3/4 bg-[#514F4F] p-4 rounded-lg shadow-lg">
          <button className="text-white mb-4" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
          <div className="bg-black p-8 rounded-lg h-96">
            {error ? (
              <div className="text-red-500">{error}</div>
            ) : note ? (
              <div className="text-white">
                <h2 className="text-2xl">{note.title}</h2>
                <p className="text-lg">
                  {note.date} &nbsp;&nbsp;&nbsp; Kategori: {note.category}
                </p>
                <div className="text-lg whitespace-pre-wrap">
                  {note.content || "No content available"}
                </div>
              </div>
            ) : (
              <div className="text-white">Loading...</div>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-[#514F4F] p-4 text-center">
        <p className="text-lg">Memoir</p>
        <p> by: Daffa Pratama | 2024</p>
      </footer>
    </div>
  );
};
export default Memoir;
