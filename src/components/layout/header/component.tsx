"use client";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Logo } from "./logo";
import { UserContext } from "@/context/session";
import { getCookies } from "@/actions/getCookies/action";

const Header = () => {
  const [isLogged, setIsLogger] = useState(false);
  const [openUserMenuMobile, setOpenUserMenuMobile] = useState(false);
  const [openUserMenuDesktop, setOpenUserMenuDesktop] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { setIsAuthenticated } = useContext(UserContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  const handleOpenMenu = useCallback(() => {
    if (isMobile) {
      return setOpenUserMenuMobile(true);
    }
    return setOpenUserMenuDesktop(true);
  }, [isMobile]);

  const handleCloseMenu = useCallback(() => {
    setOpenUserMenuMobile(false);

    setOpenUserMenuDesktop(false);
  }, []);

  return (
    <>
      <AppBar
        sx={{
          "&": {
            backgroundColor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <Container maxWidth="desktop">
          <Toolbar
            sx={{
              //   border: "solid 1px white",
              justifyContent: isLogged ? "space-between" : "center",
              alignItems: "center",
            }}
          >
            <Logo
            //   width={isMobile ? "40px" : "60px"}
            //   height={isMobile ? "40px" : "60px"}
            />

            {isLogged ? (
              <IconButton
                ref={anchorRef}
                onClick={handleOpenMenu}
                aria-controls={openUserMenuDesktop ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openUserMenuDesktop ? "true" : undefined}
              >
                <Avatar sx={{ bgcolor: theme.palette.background.paper }}>
                  MW
                </Avatar>
              </IconButton>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* User Profile mobile */}
      <Drawer
        anchor="right"
        open={openUserMenuMobile}
        onClose={handleCloseMenu}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseMenu}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* User Profile desktop */}
      <Menu
        anchorEl={anchorRef.current!}
        id="user-menu"
        open={openUserMenuDesktop}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <AccountCircleIcon fontSize="large" color="secondary" />
          Profile
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <AccountCircleIcon fontSize="large" color="secondary" />
          My Account
        </MenuItem>
      </Menu>
    </>
  );
};

export { Header };
