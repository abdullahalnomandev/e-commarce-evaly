import ProductDetails from 'components/home/ProductDetails';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

const AppRouter: React.FC = ({ children }) => {
    return (
        <Suspense fallback={<div className='mt-5'>Loading...</div>}>
            <Router>
                {children}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>

            </Router>
        </Suspense>

    );
};

export default AppRouter;