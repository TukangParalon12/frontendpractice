// ChooseLanguage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define a type for the available languages
type Language = 'en' | 'id' | 'es' | 'fr' | 'de'; // Added Spanish, French, and German

interface ChooseLanguageProps {
  onLanguageChange: (language: Language) => void; // Prop type for language change
}

const ChooseLanguage: React.FC<ChooseLanguageProps> = ({ onLanguageChange }) => {
  const navigate = useNavigate();
  
  // Language state with explicit type
  const [language, setLanguage] = useState<Language>('en');

  // Translations mapping
  const translations: Record<Language, { title: string; back: string; button1: string; button2: string; button3: string; button4: string; button5: string }> = {
    en: {
      title: "Choose Language",
      back: "Back",
      button1: "Bahasa Indonesia",
      button2: "English (United States)",
      button3: "Español (España)",
      button4: "Français (France)",
      button5: "Deutsch (Deutschland)"
    },
    id: {
      title: "Pilih Bahasa",
      back: "Kembali",
      button1: "Bahasa Indonesia",
      button2: "Inggris (Amerika Serikat)",
      button3: "Spanyol (Spanyol)",
      button4: "Prancis (Prancis)",
      button5: "Jerman (Jerman)"
    },
    es: {
      title: "Elegir Idioma",
      back: "Atrás",
      button1: "Indonesio",
      button2: "Inglés (Estados Unidos)",
      button3: "Español (España)",
      button4: "Francés (Francia)",
      button5: "Alemán (Alemania)"
    },
    fr: {
      title: "Choisir la Langue",
      back: "Retour",
      button1: "Indonésien",
      button2: "Anglais (États-Unis)",
      button3: "Espagnol (Espagne)",
      button4: "Français (France)",
      button5: "Allemand (Allemagne)"
    },
    de: {
      title: "Sprache Wählen",
      back: "Zurück",
      button1: "Indonesisch",
      button2: "Englisch (Vereinigte Staaten)",
      button3: "Spanisch (Spanien)",
      button4: "Französisch (Frankreich)",
      button5: "Deutsch (Deutschland)"
    }
  };

  // Get current translations based on selected language
  const currentTranslations = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-[#2D2D2D] justify-center items-center">
      {/* Language Selection Container */}
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        {/* Title and Back Button */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="text-gray-700 mr-4"
          >
            {currentTranslations.back}
          </button>
          <span className="text-lg flex-grow text-center">{currentTranslations.title}</span>
        </div>

        {/* Language Buttons */}
        <div className="space-y-4">
          <button 
            className="bg-white text-gray-700 py-2 px-4 rounded-full w-full" 
            onClick={() => {
              setLanguage('id'); // Set language to Indonesian
              onLanguageChange("id"); // Call the function to change language
              console.log("Bahasa Indonesia selected");
            }}
          >
            {currentTranslations.button1}
          </button>
          <button 
            className="bg-white text-gray-700 py-2 px-4 rounded-full w-full" 
            onClick={() => {
              setLanguage('en'); // Set language to English
              onLanguageChange("en"); // Call the function to change language
              console.log("English (United States) selected");
            }}
          >
            {currentTranslations.button2}
          </button>
          <button 
            className="bg-white text-gray-700 py-2 px-4 rounded-full w-full" 
            onClick={() => {
              setLanguage('es'); // Set language to Spanish
              onLanguageChange("es"); // Call the function to change language
              console.log("Spanish (Spain) selected");
            }}
          >
            {currentTranslations.button3}
          </button>
          <button 
            className="bg-white text-gray-700 py-2 px-4 rounded-full w-full" 
            onClick={() => {
              setLanguage('fr'); // Set language to French
              onLanguageChange("fr"); // Call the function to change language
              console.log("French (France) selected");
            }}
          >
            {currentTranslations.button4}
          </button>
          <button 
            className="bg-white text-gray-700 py-2 px-4 rounded-full w-full" 
            onClick={() => {
              setLanguage('de'); // Set language to German
              onLanguageChange("de"); // Call the function to change language
              console.log("German (Germany) selected");
            }}
          >
            {currentTranslations.button5}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseLanguage;
