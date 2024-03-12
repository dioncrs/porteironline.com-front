import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Drawer, Icon, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from "@mui/material";
import { Link, Navigate, Outlet, useLocation, useOutletContext, useMatch } from "react-router-dom";
import { HomeSharp, AssignmentIndSharp, BookSharp, OutputSharp, AccountCircleSharp, DashboardSharp, SupervisedUserCircleSharp, SettingsSharp } from '@mui/icons-material';
import { Logotipo } from "@/components/Logotipo";
import { logoutUser } from "@/services/UserService";
import React, { useState } from "react";


export function ProtectedLayout() {
  const [user, setUser] = useOutletContext();
  const { pathname } = useLocation();
  const drawerWidth = 260

  if (!user) {
    return <Navigate to="/login" />;
  }

  const itemList = [
    {
      text: "Início",
      icon: <DashboardSharp />,
      keys: "dashboard",
      to: "/dashboard"
    },
    {
      text: "Visitas",
      icon: <BookSharp />,
      keys: "visitas",
      to: "/visitas"
    },
    {
      text: "Pessoas",
      icon: <AssignmentIndSharp />,
      keys: "pessoas",
      to: "/pessoas"
    },
    {
      text: "Porteiros",
      icon: <SupervisedUserCircleSharp />,
      keys: "porteiros",
      to: "/porteiros"
    },
    {
      text: "Configurações",
      icon: <SettingsSharp />,
      keys: "configuracoes",
      to: "/configuracoes"
    }
  ];

  async function handleLogoutClick() {
    await logoutUser();
    setUser(null);
    Navigate({ to: "/login" });
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"

      >
        <Box padding="15px 0px">
          <Logotipo />
        </Box>
        <Divider />
        <List>
          {itemList.map((item) => (
            <ListItem disablePadding key={item.keys}>
              <ListItemButton LinkComponent={Link} to={item.to} selected={pathname === item.to}>
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem >
          ))}
        </List>

        <Box sx={{ marginTop: 'auto', alignContent: "center" }} >
          <Divider />

          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <AccountCircleSharp fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={user.displayName}
                secondary={user.email}
              />
            </ListItem>
            <ListItem disablePadding onClick={handleLogoutClick}>
              <ListItemButton>
                <ListItemIcon>
                  <OutputSharp color="error" />
                </ListItemIcon>
                <ListItemText primary="Sair" primaryTypographyProps={{
                  color: 'error',
                }} />
              </ListItemButton>
            </ListItem >
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', pl: 1, pr: 1, minHeight: '100vh' }}
      >
        <Paper elevation={1} sx={{ p: 2 }}><Outlet context={[user, setUser]} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography></Paper>


      </Box>
    </Box>
  )
};