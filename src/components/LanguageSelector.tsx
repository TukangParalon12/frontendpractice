// // Version 2
// import React from "react";

// const ChooseLanguage: React.FC = () => {
//   return (
//     <div className="bg-[#2D2D2D] flex items-center justify-center min-h-screen">
//       <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-center">
//         <div className="flex justify-start mb-4">
//           <i className="fas fa-arrow-left text-gray-700"></i>
//         </div>
//         <h1 className="text-lg font-medium text-gray-700 mb-6">Choose Language</h1>
//         <div className="space-y-4">
//           <button className="bg-white text-gray-700 py-2 px-4 rounded-full w-full">
//             Bahasa Indonesia
//           </button>
//           <button className="bg-white text-gray-700 py-2 px-4 rounded-full w-full">
//             English (United States)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseLanguage;


// import React from 'react';

// function ChooseLanguage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#2D2D2D] justify-center items-center">
//       {/* Language Selection Container */}
//       <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
//         {/* Back Button */}
//         <div className="flex justify-start mb-4">
//           <i className="fas fa-arrow-left text-gray-700"></i>
//         </div>
        
//         {/* Title */}
//         <h1 className="text-gray-700 text-xl font-medium mb-6">Choose Language</h1>
        
//         {/* Language Buttons */}
//         <div className="space-y-4">
//           <button className="bg-white text-gray-700 py-2 px-4 rounded-full w-full">
//             Bahasa Indonesia
//           </button>
//           <button className="bg-white text-gray-700 py-2 px-4 rounded-full w-full">
//             English (United States)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChooseLanguage;

// LanguageSelector.tsx (File Baru)
import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onLanguageChange }) => {
  const handleLanguageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select" className="text-lg mb-2">Choose Language:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageSelect}
        className="w-full p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Tambahkan opsi bahasa lainnya jika diperlukan */}
      </select>
    </div>
  );
};

export default LanguageSelector;

