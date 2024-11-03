import { create } from "zustand";

interface ThemeStore {
    theme: string;
    setTheme: (theme: string) => void;
};

export const useCurrentTheme = create<ThemeStore>((set) => ({
    theme: "light",
    setTheme: (theme) => set({ theme }),
}));