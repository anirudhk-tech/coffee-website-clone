import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { useCurrentNav } from "@/store/navStore";

export const NavbarCategory = ({ title, route }: { title: string, route: string}) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState<boolean>(false);
    const currentCategory = useCurrentNav((state) => state.currentCategory);
    const setCurrentCategory = useCurrentNav((state) => state.setCurrentCategory);

    return (
        <Link href={route}>
            <Typography
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setCurrentCategory(title)}
                sx={{
                    backgroundColor: currentCategory === title ? theme.palette.primary.light : "transparent",
                    padding: '5px',
                    borderRadius: "10px",
                    color: hovered && currentCategory !== title ? theme.palette.primary.light : theme.palette.primary.main,
                    fontFamily: "--font-montserrat",
                    fontSize: {
                        xs: "11px",
                        sm: "11px",
                        md: "20px",
                        lg: "30px",
                        xl: "40px",
                    },
                }}
                >
                    {title}
            </Typography>
        </Link>
    );
};