import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const RootLayout = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

export default RootLayout;
