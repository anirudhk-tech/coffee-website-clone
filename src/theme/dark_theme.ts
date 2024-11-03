import { createTheme } from "@mui/material";

const coffeeColor: string = "#6F4C3E";
const lightCoffeeColor: string = "#E6CFC7";
const blackColor: string = "#000000";
const whiteColor: string = "#F5F5F5";

declare module "@mui/material/styles/createPalette" { // Extending TypeText to include button text color
    interface TypeText {
        button?: string;
    }
}

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: coffeeColor,
            light: lightCoffeeColor,
        },
        background: {
            default: blackColor,
        },
        text: {
            primary: whiteColor,
            button: blackColor,
        },
        action: {
            active: coffeeColor,
        }
    },
});