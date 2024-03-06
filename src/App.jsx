import {  
  RouterProvider,
  createBrowserRouter,
  defer,
  redirect
} from "react-router-dom";

import './App.css'


import { Container } from '@mui/material';

import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthLayout } from "./layouts/AuthLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { errorMessages, auth } from "./firebase";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedLayout } from "./layouts/ProtectedLayout";


const getUserData = () =>
  new Promise((resolve) => {
    const user = auth.currentUser;

    console.log(user);


    resolve(user);


  }
  );



const router = createBrowserRouter([
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

function App() {
  return (
    <Container>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      </AuthProvider>
    </Container>
  )
}

export default App




