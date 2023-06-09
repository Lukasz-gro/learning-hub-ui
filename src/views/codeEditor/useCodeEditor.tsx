import { useState } from "react";

export enum Language {
  CPP = "cpp",
  PYTHON = "python", 
  JAVA = "java"
}

export enum Theme {
  LIGHT = "light",
  DARK = "vs-dark"
}

export const mapOfLanguages = new Map<Language, string>()
    .set(Language.CPP, "cpp")
    .set(Language.JAVA, "java")
    .set(Language.PYTHON, "python");

export default function useCodeEditor() {
  const [language, setLanguage] = useState<Language>(Language.CPP);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [code, setCode] = useState<string|undefined>("");

  return { language, setLanguage, theme, setTheme, code, setCode };
}