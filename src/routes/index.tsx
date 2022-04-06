import React from "react";

import Layout from "../components/Layout";
import App from "./appRoutes";
import { BrowserRouter } from "react-router-dom";


const Routes = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Routes;