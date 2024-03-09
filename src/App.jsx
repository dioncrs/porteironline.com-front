

import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from '@/plugins/router';
import { Container } from '@mui/material';

function App() {
  // const { setUser } = useAppContext();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user)=> {
  //     setUser(user)
  //   })
  //   connection.connect();
  //   return () => {
  //     connection.disconnect();
  //   };
  // }, [setUser]);

  return (
    <Container>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </Container>
  )
}

export default App
