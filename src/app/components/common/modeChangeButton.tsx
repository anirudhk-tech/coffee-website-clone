import { useCurrentTheme } from "@/store/themeStore";
import { LightMode, Nightlight } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { useState } from "react";

export const ModeChangeButton = () => {
    const theme = useTheme();
    const currentTheme = useCurrentTheme((state) => state.theme);
    const setCurrentTheme = useCurrentTheme((state) => state.setTheme);
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Button
           onMouseEnter={() => setHovered(true)} 
           onMouseLeave={() => setHovered(false)}
           onClick={() => setCurrentTheme(currentTheme === "light" ? "dark" : "light")}
           sx={{
                height: '80%',
                borderRadius: "100px",
                color: hovered ? theme.palette.primary.light : theme.palette.primary.main,
           }}
           >
            { currentTheme === "light" ?
                <LightMode data-testid="light-mode-icon"/> : <Nightlight data-testid="dark-mode-icon"/>
            }
        </Button>
    )
}