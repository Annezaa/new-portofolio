"use client";

import * as React from "react";
import { createContext, useState, useContext, useMemo } from "react";

type Language = "id" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageProviderContext = createContext<LanguageProviderState | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "id",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const value = useMemo(() => ({
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang);
    },
  }), [language]);

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
