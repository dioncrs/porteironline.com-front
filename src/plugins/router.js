import { createBrowserRouter, defer } from "react-router-dom";

import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { HomeLayout } from "@/layouts/HomeLayout";

import { LoginPage } from '@/pages/LoginPage';
import { Dashboard } from '@/pages/DashboardPage';
import { HomePage } from '@/pages/HomePage';
import { RegisterPage } from '@/pages/RegisterPage';
import PersonPage from "@/pages/PersonPage";
import VisitsPage from "@/pages/VisitsPage";


export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                Component: HomeLayout,
                children: [
                    {
                        path: "login",
                        Component: LoginPage,
                    },
                    {
                        path: "registro",
                        Component: RegisterPage,
                    },
                ]
            },
            {
                Component: ProtectedLayout,
                children: [
                    {
                        path: "dashboard",
                        Component: Dashboard,
                    },
                    {
                        path: "pessoas",
                        Component: PersonPage,
                    },
                    {
                        path: "visitas",
                        Component: VisitsPage,
                    }
                ]
            },
        ],
    },
]);