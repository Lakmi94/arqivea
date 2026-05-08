"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Route {
  id: string;
  name: string;
  museums: string[];
  date: string;
  stopsCount: number;
}

interface RoutesContextType {
  routes: Route[];
  addRoute: (route: Route) => void;
}

const RoutesContext = createContext<RoutesContextType | undefined>(undefined);

export function RoutesProvider({ children }: { children: ReactNode }) {
  const [routes, setRoutes] = useState<Route[]>([]);

  const addRoute = (route: Route) => {
    setRoutes((prev) => [...prev, route]);
  };

  return (
    <RoutesContext.Provider value={{ routes, addRoute }}>
      {children}
    </RoutesContext.Provider>
  );
}

export function useRoutes() {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutes must be used within a RoutesProvider");
  }
  return context;
}