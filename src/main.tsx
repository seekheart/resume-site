import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home/HomePage.tsx";
import {JobLoader, JobsPage} from "./pages/jobs/JobsPage.tsx";
import {jobs} from "./services/JobService.ts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/jobs/:id',
                element: <JobsPage/>,
                loader: JobLoader
            }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>,
)
