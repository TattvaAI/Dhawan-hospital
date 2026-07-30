"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import { useUIStore } from "@/store/useUIStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { setTheme } = useUIStore();

  // Sync theme with Zustand on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = storedTheme || "dark";
    setTheme(initialTheme);
  }, [setTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
