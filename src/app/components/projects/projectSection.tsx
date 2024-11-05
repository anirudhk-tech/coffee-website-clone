import { Box, Typography } from "@mui/material";
import { Phonelink } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

export const ProjectSection = ({ title, description}: { title: string, description: string }) => {
    const theme = useTheme();
    return (
        <Box
        data-testid="project-section"
        sx={{
            height: 'fit-content',
            width: '100vw',
            padding: '5vh',
        }}
        >
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
        >
            <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
            style={{ 
                flexDirection: 'row', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%',
            }}
            >
                <Typography sx={{
                    fontFamily: "--font-montserrat",
                    fontSize: "clamp(20px, 40px, 100px)",
                    fontWeight: 550,
                    color: theme.palette.primary.main,
                }}>
                    {title}
                </Typography>
                <Phonelink sx={{ 
                    width: '10%', 
                    height: '100%', 
                    color: theme.palette.primary.main 
                }}/>
            </motion.div>
        </Box>
        <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
        style={{ 
            flexDirection: 'row', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%',
        }}
        >
            <Typography sx={{
                fontFamily: "--font-montserrat",
                fontSize: "clamp(10px, 25px, 100px)",
                width: {
                    xs: "90vw",
                    sm: "70vw",
                    md: "70vw",
                    lg: "70vw",
                    xl: "70vw",
                },                
                color: theme.palette.text.primary,
            }}>
                {description}
            </Typography>
        </motion.div>
        </Box>
    )
}