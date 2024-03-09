import { Link, Navigate, Outlet, useOutletContext } from "react-router-dom";


export const ProtectedLayout = () => {
  const [ user, setUser ] = useOutletContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="/dashboard">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet context={[user, setUser]} />
    </div>
  )
};