import { createContext, useContext, useState, type ReactNode } from "react";

interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoriesContext = createContext<CategoriesProps | undefined>(undefined);

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("todos");

  return (
    <CategoriesContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCategory() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("Use o contexto dentro de um provider");
  }

  return context;
}
