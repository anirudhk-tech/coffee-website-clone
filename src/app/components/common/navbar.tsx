import { useTheme, AppBar, Box } from "@mui/material";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import { NavbarCategory } from "./navbarCategory";
import { ModeChangeButton } from "./modeChangeButton";
import React from "react";

export const Navbar = () => {
    const theme = useTheme();
    const LogoComponent = React.memo(() => (
    <Image 
        src={Logo} 
        alt={"Coffee logo"}
        style={{
            height: "10vh",
            width: "10vh",
        }}    
    />)) // Memoizing the component to avoid unnecessary re-renders
    LogoComponent.displayName = "LogoComponent"; // Setting display name to avoid ESlint error

    return (
        <AppBar
        data-testid="navbar" 
        position="static"
        elevation={0}
        sx={{
            backgroundColor: theme.palette.background.default,
            height: "10vh",
            width: "100vw",
            paddingLeft: "1vw",
            paddingRight: "1vw",
            flexDirection: "row",
            alignItems: "center",
            position: "sticky",
        }}
        >
           <LogoComponent/>
           <Box 
           sx={{ 
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3vw",
           }}
           >
                <NavbarCategory title="Home" route="/"/>
                <NavbarCategory title="Projects" route="/projects"/>
                <NavbarCategory title="What is Coffee?" route="/about"/>
                <NavbarCategory title="Contact" route="/contact"/>
           </Box>
           <ModeChangeButton/>
        </AppBar>
    );
};