

import './App.css'
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { router } from '@/plugins/router';

import { Container } from '@mui/material';

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
