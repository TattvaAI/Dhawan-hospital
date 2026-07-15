import { create } from "zustand";

type Theme = "light" | "dark";

interface UIState {
  theme: Theme;
  mobileMenuOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: "dark", // Default theme is dark blue
  mobileMenuOpen: false,

  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
    set({ theme });
  },

  toggleTheme: () => {
    set((state) => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        const root = document.documentElement;
        root.classList.toggle("dark", nextTheme === "dark");
        localStorage.setItem("theme", nextTheme);
      }
      return { theme: nextTheme };
    });
  },

  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));
