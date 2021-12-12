import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
const AppRouter: React.FC = ({children}) => {
    return (
        <Router>
            {children}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
            </Routes>

        </Router>
    );
};

export default AppRouter;