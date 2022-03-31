import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import DashBoard from "./pages/DashBoard";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <DashBoard></DashBoard>
            </Layout>
        </ThemeProvider>
    )
}

export default App;