// Notifications.tsx
import React, { useState } from "react";

const Notifications: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true); // Mengatur apakah notifikasi diaktifkan
  const [reminders, setReminders] = useState([
    { id: 1, title: "Ulang Tahun Teman", date: "2024-11-10" },
    { id: 2, title: "Tugas Matematika", date: "2024-11-05" },
  ]);

  const toggleNotifications = () => {
    setIsEnabled((prev) => !prev);
  };

  const handleAddReminder = () => {
    const title = prompt("Masukkan judul pengingat:");
    const date = prompt("Masukkan tanggal (YYYY-MM-DD):");
    if (title && date) {
      setReminders((prev) => [...prev, { id: Date.now(), title, date }]);
    }
  };

  const handleDeleteReminder = (id: number) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">
      <header className="bg-[#514F4F] p-4 flex items-center">
        <h1 className="text-2xl">Notifications</h1>
      </header>
      <main className="flex-grow p-4 bg-[#2D2D2D]">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={toggleNotifications}
            className="mr-2"
          />
          <span>Aktifkan Notifikasi</span>
        </div>
        
        <h2 className="text-lg mb-2">Pengingat:</h2>
        <div className="space-y-2">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex justify-between items-center bg-gray-700 p-3 rounded">
              <span>{reminder.title} - {reminder.date}</span>
              <button
                onClick={() => handleDeleteReminder(reminder.id)}
                className="bg-red-500 px-2 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddReminder}
          className="bg-blue-500 mt-4 py-2 px-4 rounded"
        >
          Tambah Pengingat
        </button>
      </main>
    </div>
  );
};

export default Notifications;
