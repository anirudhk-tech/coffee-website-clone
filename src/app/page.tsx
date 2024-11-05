"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import { Navbar } from "./components/common/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCurrentNav } from "@/store/navStore";
import { motion } from "framer-motion";

export default function Home() {
  const theme = useTheme();
  const [seeOurWorkHovered, setSeeOurWorkHovered] = useState<boolean>(false);
  const setCurrentCategory = useCurrentNav((state) => state.setCurrentCategory);
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
        padding: '5vw', 
        flexDirection: {
          xs: "column", 
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row", 
        },
        display: "flex",
        gap: '4vh',
        height: '45vh',
      }}>
        <Box sx={{
          display: "flex",
          height: '40vh',
          flex: 1,
          flexDirection: "column",
        }}>
          <motion.div 
          animate={ width > 600 ? { x: 20, opacity: 1.0 } : { opacity: 1.0 }} 
          initial={{ x: 0, opacity: 0.0 }}
          transition={{ duration: 1.0 }}
          >
            <Typography sx={{
              color: theme.palette.primary.main,
              fontFamily: "--font-montserrat",
              fontSize: {
                xs: "30px",
                sm: "40px",
                md: "50px",
                lg: "60px",
                xl: "70px",
              },
            }}>Building Software</Typography>
            <Typography sx={{
              color: theme.palette.primary.main,
              fontFamily: "--font-montserrat",
              fontSize: {
                xs: "30px",
                sm: "40px",
                md: "50px",
                lg: "60px",
                xl: "70px",
              },
            }}>That Matters.</Typography>
        </motion.div>
        </Box>
        <Box sx={{
          display: "flex",
          height: '30vh',
          flex: 1,
          alignItems: {
            xs: "flex-start",
            sm: "flex-end",
            md: "flex-end",
            lg: "flex-end",
            xl: "flex-end",
          },
          justifyContent: {
            xs: "flex-start",
            sm: "flex-end",
            md: "flex-end",
            lg: "flex-end",
            xl: "flex-end",
          },
          paddingRight: "7vw", // Padding makes button position itself properly
        }}>
          <motion.div
          animate={{ opacity: 1.0 }}
          initial={{ opacity: 0.0 }}
          transition={{ duration: 1.0 }}
          >
            <Link 
            href="/projects"
            onClick={() => setCurrentCategory("Projects")}
            >
              <Button 
              variant="contained"
              onMouseEnter={() => setSeeOurWorkHovered(true)}
              onMouseLeave={() => setSeeOurWorkHovered(false)}
              sx={{
                height: "clamp(7vh, 10vh, 15vh)",
                width: "clamp(120px, 150px, 200px)",
                backgroundColor: seeOurWorkHovered ? theme.palette.primary.light : theme.palette.primary.main,
                color: theme.palette.text.button,
                fontFamily: "--font-montserrat",
                fontSize: "clamp(10px, 15px, 20px)",
              }}
              >See our work</Button>
            </Link>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

