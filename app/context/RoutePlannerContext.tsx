"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ArtworkCardProps } from "../components/artworkCard";

interface RoutePlannerContextType {
  savedArtworks: ArtworkCardProps[];
  toggleSavedArtwork: (artwork: ArtworkCardProps) => void;
  isArtworkSaved: (title: string) => boolean;
}

const RoutePlannerContext = createContext<RoutePlannerContextType | undefined>(undefined);

export function RoutePlannerProvider({ children }: { children: ReactNode }) {
  const [savedArtworks, setSavedArtworks] = useState<ArtworkCardProps[]>([]);

  const toggleSavedArtwork = (artwork: ArtworkCardProps) => {
    setSavedArtworks((prev) => {
      const isSaved = prev.some((a) => a.title === artwork.title);
      if (isSaved) {
        return prev.filter((a) => a.title !== artwork.title);
      } else {
        return [...prev, artwork];
      }
    });
  };

  const isArtworkSaved = (title: string) => {
    return savedArtworks.some((a) => a.title === title);
  };

  return (
    <RoutePlannerContext.Provider value={{ savedArtworks, toggleSavedArtwork, isArtworkSaved }}>
      {children}
    </RoutePlannerContext.Provider>
  );
}

export function useRoutePlanner() {
  const context = useContext(RoutePlannerContext);
  if (!context) {
    throw new Error("useRoutePlanner must be used within a RoutePlannerProvider");
  }
  return context;
}