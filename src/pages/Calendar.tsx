import React, { useState, useEffect } from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

interface Note {
  id: number;
  title: string;
  category: string;
  deadline: string;
  isi_catatan: string;
}

const NoticeCalendar: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("https://d09jsw8q-3000.asse.devtunnels.ms/catatan/select/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const getListData = (value: Dayjs) => {
    // Filter notes where the deadline matches the calendar date
    const filteredNotes = notes.filter(
      (note) => dayjs(note.deadline).isSame(value, "day")
    );

    // Map notes to the format needed for rendering with badges
    return filteredNotes.map((note) => ({
      type: "warning", // You can customize the badge type based on note properties
      content: note.title,
    }));
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps["status"]} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const monthCellRender = (value: Dayjs) => {
    // Optional: Customize what to render in month cells, if needed
    return null;
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#2D2D2D] text-white font-sans">
      <header className="bg-[#514F4F] p-6 flex justify-between items-center text-2xl">
        <h1>Memoir | Calendar</h1>
        <nav className="flex items-center"></nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-[#514F4F] p-8 rounded-lg w-4/5 max-w-4xl">
          <Calendar
            cellRender={cellRender}
            className="bg-white text-black rounded-lg"
          />
        </div>
      </main>
      <footer className="bg-[#514F4F] p-6 text-center text-xl">
        <div className="text-[24px] font-bold">Memoir</div>
        <p>by: Daffa Pratama | 2024</p>
      </footer>
    </div>
  );
};

export default NoticeCalendar;
