import {
  Link,
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";


import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/DashboardPage';
import { authProvider } from './auth';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { Box, Container } from '@mui/material';
import { AuthLayout } from "./layouts/AuthLayout";
import './App.css'
import { ConfirmRegisterPage, confirmAction, confirmLoader } from "./pages/ConfirmRegisterPage";
import { errorMessages } from "./firebase";



const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "login",
            action: loginAction,
            loader: loginLoader,
            Component: LoginPage,
          },
          {
            path: "registro",
            action: registerAction,
            loader: loginLoader,
            Component: RegisterPage,
          },
          {
            path: "confirmacao",
            // action: confirmAction,
            // loader: confirmLoader,
            Component: ConfirmRegisterPage,
          },
        ]
      },
      {
        path: "app",
        loader: protectedLoader,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          }
        ]
      },
    ],
  },
  {
    path: "/logout",
    loader: logoutLoader
  },
]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </Container>
  )
}

export default App

function rootLoader() {
  // TODO criar metodo para ler o localstorage e verificar se o usuáriom está logado.
  return { user: authProvider.user };
}

async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

async function logoutLoader() {
  await authProvider.signout()
  return redirect("/login");
}

async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await authProvider.signin(email, password);

  } catch (error) {
    if (errorMessages[error.code]) {
      return { error: errorMessages[error.code] };
    }
    console.log(error);
    return { error: "Falha ao tentar fazer login!" }
  }
  return redirect("/app/dashboard");
}

export async function registerAction({ request }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirmation = formData.get("passwordConfirmation");
  console.log("efetuando cadastro", email, password, passwordConfirmation)

  if (password !== passwordConfirmation) {
    return { error: "As senhas não coincidem. Por favor, tente novamente." };
  }

  try {
    await authProvider.signup(email, password);
  } catch (error) {
    if (errorMessages[error.code]) {
      return { error: errorMessages[error.code] };
    }
    console.log(error);
    return { error: "Falha ao tentar fazer login!" }
  }
  return redirect("/app/dashboard");
}

function protectedLoader() {
  if (!authProvider.isAuthenticated) {
    return redirect("/login");
  }
  return null;
}
