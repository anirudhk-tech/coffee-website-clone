"use client"

import { useTheme, Box } from "@mui/material";
import { Navbar } from "../components/common/navbar";


export default function About() {
    const theme = useTheme();

    return (
        <Box
        sx={{
            backgroundColor: theme.palette.background.default,
            height: "100vh",
            width: "100vw",
        }}
        >
            <Navbar/>
        </Box>
    );
}