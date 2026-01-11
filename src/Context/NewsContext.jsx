import { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("global");

  return (
    <NewsContext.Provider value={{ category, setCategory }}>
      {children}
    </NewsContext.Provider>
  );
};
