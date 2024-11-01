// // Your Parent Component (where LanguageSelector is used)
// import React, { useState } from 'react';
// import ChooseLanguage from '../pages/IsiSettings/ChooseLanguage';
// import LanguageSelector from "../../components/LanguageSelector"; // Pastikan file ini berada di direktori yang sama

// const SelectLanguage: React.FC = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");

//   const handleLanguageChange = (language: string) => {
//     setSelectedLanguage(language);
//   };

//   return (
//     <div className="bg-black w-full text-white py-3 rounded-full flex flex-col px-4">
//       <span>Language</span>
//       <LanguageSelector
//         selectedLanguage={selectedLanguage}
//         onLanguageChange={handleLanguageChange}
//       />
//       <ChooseLanguage onLanguageChange={handleLanguageChange} /> {/* Pass the function here */}
//     </div>
//   );
// };

// export default SelectLanguage;
