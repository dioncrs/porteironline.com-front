import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { AuthProvider } from "@/hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { Centralize } from "@/components/Centralize";

export const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<Centralize> <CircularProgress /></Centralize>}>
      <Await
        resolve={userPromise}
        errorElement={<Centralize><Alert severity="error">Ops! Algo deu errado no carregamento</Alert></Centralize>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};