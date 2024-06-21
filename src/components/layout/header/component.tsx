"use client";
import { useCallback, useContext, useRef, useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
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
import { getInitials } from "@/helper/getInitials";
import { UserContext } from "@/context/session";
import { Logout } from "@/actions/logout/action";
import { useRouter } from "next/navigation";
import { menuItemDesktopStyle } from "./style";

const Header = () => {
  const [openUserMenuMobile, setOpenUserMenuMobile] = useState(false);
  const [openUserMenuDesktop, setOpenUserMenuDesktop] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { loggedUser } = useContext(UserContext);
  const router = useRouter();

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

  const handleLogout = async () => {
    const response: any = await Logout();
    if (response.status === 200) {
      router.push("/login");
    }
  };

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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />

            <IconButton
              ref={anchorRef}
              onClick={handleOpenMenu}
              sx={{
                width: "50px",
                height: "50px",
                border: "solid 2px white",
              }}
              aria-controls={openUserMenuDesktop ? "user-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openUserMenuDesktop ? "true" : undefined}
            >
              <Avatar
                sx={{
                  fontSize: "1rem",
                  color: "white",
                  bgcolor: theme.palette.background.paper,
                }}
              >
                {loggedUser ? getInitials(loggedUser.username) : ""}
              </Avatar>
            </IconButton>
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

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
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
        <MenuItem sx={menuItemDesktopStyle} onClick={handleCloseMenu}>
          <AccountCircleIcon fontSize="medium" color="primary" />
          Profile
        </MenuItem>
        <MenuItem
          sx={menuItemDesktopStyle}
          onClick={() => {
            handleLogout();
            handleCloseMenu();
          }}
        >
          <LogoutIcon fontSize="medium" color="primary" />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export { Header };
