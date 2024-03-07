import { createBrowserRouter, defer } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/plugins/firebase";

import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { HomeLayout } from "@/layouts/HomeLayout";

import { LoginPage } from '@/pages/LoginPage';
import { Dashboard } from '@/pages/DashboardPage';
import { HomePage } from '@/pages/HomePage';
import { RegisterPage } from '@/pages/RegisterPage';


const getUserData = () =>
    new Promise((resolve) => onAuthStateChanged(auth, (user) => {
        resolve(user);
    }));


export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: () => defer({ userPromise: getUserData() }),
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
                    }
                ]
            },
        ],
    },
]);