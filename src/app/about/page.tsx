"use client"

import { useTheme, Box, Typography } from "@mui/material";
import { Navbar } from "../components/common/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
    const theme = useTheme();
    const [width, setWidth] = useState<number>(0);

    useEffect(() => { // Waiting for component to mount
      setWidth(window.innerWidth);
    }, []);

    return (
        <Box
        sx={{
            backgroundColor: theme.palette.background.default,
            height: "100vh",
            width: "100vw",
        }}
        >
            <Navbar/>
            <Box sx={{
                height: '90vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                padding: '5vh',
                overflowX: 'hidden', // Hides scroll bar in X axis on animations
            }}>
                <motion.div
                animate={width > 600 ? { opacity: 1, x: 20 } : { opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.0 }}
                >
                    <Typography sx={{
                        fontFamily: "--font-montserrat",
                        fontSize: "30px",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                    }}>Why Coffee?</Typography>
                    <Typography sx={{
                        fontFamily: "--font-montserrat",
                        fontSize: "15px",
                        width: {
                            xs: "90vw",
                            sm: "70vw",
                            md: "70vw",
                            lg: "70vw",
                            xl: "70vw",
                        },                
                        color: theme.palette.text.primary,
                    }}>
                        Before Coffee, we have always thought a tiny little café would be a great business. 
                        Although we have moved on to a tech startup, we are passionate about developing innovative solutions that bring people together, 
                        just like the perfect cup of coffee. 
                    </Typography>
                </motion.div>
                <motion.div
                animate={width > 600 ? { opacity: 1, x: 20 } : { opacity: 1, x: 1 }} // Adjust animations based on screen size as to not go out of bounds
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.0 }}
                >
                    <Typography sx={{
                        fontFamily: "--font-montserrat",
                        fontSize: "30px",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        marginTop: "5vh",
                    }}>What is built at Coffee?</Typography>
                    <Typography sx={{
                        fontFamily: "--font-montserrat",
                        fontSize: "15px",
                        width: {
                            xs: "90vw",
                            sm: "70vw",
                            md: "70vw",
                            lg: "70vw",
                            xl: "70vw",
                        },                
                        color: theme.palette.text.primary,
                    }}>
                        At Coffee, we create solutions that fill gaps overlooked by existing products, making life easier for everyday people. 
                        Our mission is to enhance experiences and simplify processes, turning challenges into seamless opportunities for everyone.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}