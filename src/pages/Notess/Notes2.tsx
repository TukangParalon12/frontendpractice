import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotesCard from "../../components/Component_Notes/NotesCard"; 
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input } from "antd";

const items = [
  { label: "All", key: "0", value: "" },
  { label: "Personal", key: "1", value: "Personal" },
  { label: "Works", key: "2", value: "Works" },
  { label: "Hobby", key: "3", value: "Hobby" },
  { label: "Reminder", key: "4", value: "Reminder" },
  { label: "Other", key: "5", value: "Other" },
];

const Notes2 = () => {
  const [notesData, setNotesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State untuk search query
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/Login"); // Redirect to login if token is missing
        return;
      }

      const response = await axios.get(`https://d09jsw8q-3000.asse.devtunnels.ms/catatan/select/notes`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to Authorization header
        },
      });

      setNotesData(response.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError("Authorization failed. Please log in again.");
        navigate("/Login"); // Redirect to login if unauthorized
      } else {
        console.error("Error fetching notes:", error.response?.data || error.message);
        setError("Failed to load notes, please try again later.");
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Filter berdasarkan kategori dan search query
  const filteredNotes = notesData.filter((note) =>
    note.category.includes(selectedCategory) &&
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter berdasarkan search query
  );

  const handleMenuClick = ({ key }) => {
    const selected = items.find((item) => item.key === key);
    setSelectedCategory(selected ? selected.value : "");
  };

  const handleNoteClick = (noteId: number) => {
    navigate(`/noteDetail/${noteId}`);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value); // Update search query saat ada input
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">
      <header className="bg-[#514F4F] p-4 flex justify-between items-center">
        <div className="text-[40px] font-bold">Memoir</div>
        <button
          className="hover:bg-gray-700 transition-colors duration-200 p-2 rounded"
          onClick={() => navigate("/Profile2")}
        >
          <div className="text-white text-[24px]">Profile</div>
        </button>
      </header>
      <main className="flex-grow bg-[#2D2D2D] p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button
              className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors"
              onClick={() => navigate("/AddNotes")}
            >
              Add Notes
            </button>
            <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
              <button className="bg-black text-white rounded-full w-[150px] h-[50px] hover:bg-gray-700">
                <Space>
                  Category
                  <DownOutlined />
                </Space>
              </button>
            </Dropdown>
            <button
              className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-700"
              onClick={() => navigate("/NoticeCalendar")}
            >
              Calendar
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative">
            <Input
              placeholder="Search notes"
              allowClear
              prefix={<SearchOutlined style={{ color: "#A9A9A9" }} />} // Ikon pencarian abu-abu
              size="middle"
              className="rounded-full w-[200px]"
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "gray",
              }}
            />
          </div>
        </div>
        {/* Bagian tampilan catatan dengan hover */}
        <div className="space-y-4">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-[#3A3A3A] p-4 rounded-lg hover:bg-gray-600 transition duration-200 cursor-pointer"
                onClick={() => handleNoteClick(note.id)}
              >
                <h2 className="text-xl font-bold text-white">{note.title}</h2>
                <p className="text-gray-400">{note.isi_catatan}</p>
                <p className="text-sm text-gray-500">{note.category}</p>
              </div>
            ))
          )}
        </div>
      </main>
      <footer className="bg-[#514F4F] p-4 text-center">
        <div className="text-[24px] font-bold">Memoir</div>
        <p>by: Daffa Pratama | 2024</p>
      </footer>
    </div>
  );
};

export default Notes2;
