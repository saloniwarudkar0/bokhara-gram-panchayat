
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("bokhara-language");
    return ["mr", "hi", "en"].includes(savedLanguage)
      ? savedLanguage
      : "mr";
  });

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    localStorage.setItem("bokhara-language", nextLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
