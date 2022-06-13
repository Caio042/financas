import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";


const App: React.FC = () => {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;