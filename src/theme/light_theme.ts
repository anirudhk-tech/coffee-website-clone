import { createTheme } from "@mui/material";

const coffeeColor: string = "#6F4C3E";
const lightCoffeeColor: string = "#E6CFC7";
const blackColor: string = "#000000";
const whiteColor: string = "#F5F5F5";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: coffeeColor,
            light: lightCoffeeColor,
        },
        background: {
            default: whiteColor,
        },
        text: {
            primary: blackColor,
        },
        action: {
            active: coffeeColor,
        }
    },
});
