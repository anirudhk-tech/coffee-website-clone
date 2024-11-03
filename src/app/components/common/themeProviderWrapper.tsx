"use client";

import { ThemeProvider } from "@mui/material";
import { darkTheme } from "@/theme/dark_theme";
import { lightTheme } from "@/theme/light_theme";
import { useCurrentTheme } from "@/store/themeStore";
import React from "react";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    const currentTheme = useCurrentTheme((state) => state.theme);

    return (
        <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};