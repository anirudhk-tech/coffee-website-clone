"use client"

import { useTheme, Box } from "@mui/material";
import { Navbar } from "../components/common/navbar";
import { ProjectSection } from "../components/projects/projectSection";

export default function Projects () {
    const theme = useTheme();

    return (
        <Box
        sx={{
            backgroundColor: theme.palette.background.default,
            height: "clamp(100vh, 100vh, 100000vh)", // High maximum to adapt to any project count
            overflowX: "hidden",
            width: "100vw",
        }}
        >
            <Navbar/>
            <ProjectSection
            title={"Habit Tracker"}
            description="Introducing our all-in-one habit tracker app, designed to simplify your journey towards personal growth. 
                        We understand the challenge of managing multiple habit trackers, so we have combined them into a single, intuitive platform."
            />
        </Box>
    );
};