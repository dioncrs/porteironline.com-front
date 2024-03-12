import { Fragment, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { Centralize } from "@/components/Centralize";
import { auth } from "@/plugins/firebase";

export const AuthLayout = () => {
  const [ user, setUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const checkUser = async() =>{
    await auth.authStateReady();
    setUser(auth.currentUser);
    setIsLoading(false)
    }

    useEffect(() => {checkUser()}, [user, setUser]);

  return (
    <Fragment>
    {isLoading ? (<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={isLoading}
>
  <CircularProgress color="inherit" />
</Backdrop>) : (<Outlet context={[user, setUser]}></Outlet>)}
    </Fragment>
  )
};