import { Fragment, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Centralize } from "@/components/Centralize";
import { auth } from "@/plugins/firebase";

export const AuthLayout = () => {
  const [ user, setUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const checkUser = async() =>{
    await auth.authStateReady();
    setUser(auth.currentUser.uid);
    setIsLoading(false)
    }

    useEffect(() => {checkUser()}, [user, setUser]);

  return (
    <Fragment>
    {isLoading ? (<Centralize> <CircularProgress /></Centralize>) : (<Outlet context={[user, setUser]}></Outlet>)}
    </Fragment>
  )
};