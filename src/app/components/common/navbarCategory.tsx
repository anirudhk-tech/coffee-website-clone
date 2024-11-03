import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export const NavbarCategory = ({ title, route }: { title: string, route: string}) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Link href={route}>
            <Typography
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    color: hovered ? theme.palette.primary.light : theme.palette.primary.main,
                    fontFamily: "--font-montserrat",
                    fontSize: {
                        xs: "13px",
                        sm: "13px",
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