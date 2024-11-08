"use client"

import { useTheme, Box, Typography, Tooltip } from "@mui/material";
import { Navbar } from "../components/common/navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact () {
    const theme = useTheme();
    const [emailHovered, setEmailHovered] = useState<boolean>(false);
    const [emailClicked, setEmailClicked] = useState<boolean>(false);

    return (
        <Box
        sx={{
            backgroundColor: theme.palette.background.default,
            height: "100vh",
            width: "100vw",
        }}
        >
            <Navbar/>
            <Box
            sx={{
                height: '90vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                padding: '5vh',
            }}
            >
                <Typography sx={{
                    fontFamily: "--font-montserrat",
                    fontSize: "40px",
                    fontWeight: 550,
                    color: theme.palette.primary.main,
                    textAlign: "center",
                }}>Email Us!</Typography>
                <Typography sx={{
                    fontFamily: "--font-montserrat",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                    textAlign: "center",
                }}>{"We'd love to hear from you"}</Typography>
                <motion.div
                animate={{ opacity: 1, y: 20 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.0 }}
                style={{ alignSelf: "center" }}
                >
                    <Tooltip 
                    title={emailClicked ? "Copied!" : "Copy"}
                    PopperProps={{     // Styling tooltip internally                
                        sx: {
                            '& .MuiTooltip-tooltip': {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.main,
                            },
                        },
                    }}
                    >
                        <Typography 
                        onClick={() => {
                            navigator.clipboard.writeText("coffee.codelabs@gmail.com");
                            setEmailClicked(true);
                        }}
                        onMouseEnter={() => {
                            setEmailHovered(true);
                            setEmailClicked(false); // Makes sure "Copy" is shown
                        }}
                        onMouseLeave={() => setEmailHovered(false)}
                        sx={{
                            fontFamily: "--font-montserrat",
                            fontSize: {
                                xs: "25px",
                                sm: "50px",
                                md: "70px", 
                                lg: "90px",
                                xl: "110px",
                            },
                            fontWeight: 500,
                            color: emailHovered ? theme.palette.primary.light : theme.palette.primary.main,
                            textAlign: "center",
                            marginTop: '10vh',
                            cursor: "pointer",
                            width: "fit-content", // Makes box only take up as much space as the text
                            alignSelf: "center",
                        }}>coffee.codelabs@gmail.com</Typography>
                    </Tooltip>
                </motion.div>
            </Box>
        </Box>
    );
};