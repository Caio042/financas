import React from "react";
import { Route, Routes } from 'react-router-dom';

import DashBoard from "../pages/DashBoard";
import List from "../pages/List";
import Layout from "../components/Layout";

const App: React.FC = () => (
    
    <Layout>
        <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/list/:type" element={<List />} />
        </Routes>
    </Layout>
);

export default App;