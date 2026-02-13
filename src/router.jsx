import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './components/NotFound';
import App from './App';

// Lazy loading components
const Events = lazy(() => import('./components/Events'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const Counter = lazy(() => import('./components/Counter'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "events/:name",
                element: <EventDetails />
            },
            {
                path: "counter",
                element: <Counter initialCount={0} step={1} />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default router;
