"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterState = Record<string, string[]>;

interface FilterContextType {
  selectedFilters: FilterState;
  toggleFilter: (categoryId: string, option: string) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({});

  const toggleFilter = (categoryId: string, option: string) => {
    setSelectedFilters((prev) => {
      const currentCategory = prev[categoryId] || [];
      const isSelected = currentCategory.includes(option);
      const newCategory = isSelected
        ? currentCategory.filter((item) => item !== option)
        : [...currentCategory, option];

      return {
        ...prev,
        [categoryId]: newCategory,
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <FilterContext.Provider value={{ selectedFilters, toggleFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
}