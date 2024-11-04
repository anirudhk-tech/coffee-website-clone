import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavStore {
    currentCategory: string,
    setCurrentCategory: (category: string) => void,
};

export const useCurrentNav = create(
    persist<NavStore>(
        (set) => ({
            currentCategory: "Home",
            setCurrentCategory: (category) => set({ currentCategory: category }),
        }),
        {
            name: "nav-store",
        }
    )
);