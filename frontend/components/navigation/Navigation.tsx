import React, { useState, useEffect, useContext } from "react";
import {
  ListItemText,
  Box,
  Typography,
  List,
  Grid,
  ListItem,
  Drawer,
  Button,
  Link,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logotyp_svart_text.png";
import LaunchIcon from "@mui/icons-material/Launch";
import NextLink from "next/Link";

/**
 * Component for menu
 * @returns
 */
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const list = () => (
    <List
      sx={[
        { display: "flex" },
        isDesktop
          ? { flexDirection: "row", width: "70%" }
          : { flexDirection: "column", width: "100%" },
      ]}
    >
      {[
        {
          name: "HEM",
          to: "/",
        },
        { name: "STUDENTLIV", to: "/studentliv" },
        { name: "OM MT", to: "/about" },
        { name: "SEKTIONEN", to: "/sektionen" },
      ].map((link, index) => (
        <ListItem key={index}>
          <NextLink href={link.to} onClick={closeMenu} legacyBehavior={false}>
            <Typography variant="h4">{link.name}</Typography>
          </NextLink>
        </ListItem>
      ))}
      <ListItem>
        <LaunchIcon sx={{ fontSize: "14px" }} />
        <Link
          target="_blank"
          rel="noopener"
          href="https://www.medieteknikdagen.se/"
        >
          <Typography variant="h4">MÄSSA</Typography>
        </Link>
      </ListItem>
    </List>
  );

  return (
    <Grid
      sx={[
        {
          p: 2,
          position: "fixed",
          zIndex: 999,
          top: 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          transition: "0.5s",
          alignItems: "center",
        },
        bgColor && { backgroundColor: "white" },
      ]}
    >
      {isDesktop ? (
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <img alt="MT LOGO" src={logo.src} width="70px" />
          </a>
          {list()}
          <Link
            href="https://old.medieteknik.nu/forum_cookie"
            target="_blank"
            rel="noopener"
          >
            <Button variant="outlined" startIcon={<LoginIcon />}>
              <Typography variant="h4">LOGGA IN</Typography>
            </Button>
          </Link>
        </Grid>
      ) : (
        <>
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              top: "20px",
              zIndex: 9999,
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Grid sx={{ zIndex: 99999 }}>
              <Hamburger toggled={isOpen} toggle={setOpen} color="black" />
            </Grid>
          </Box>

          <Drawer
            anchor="right"
            sx={{ zIndex: 10 }}
            open={isOpen}
            onClose={closeMenu}
            transitionDuration={600}
            PaperProps={{
              sx: { width: "30%", backgroundColor: "#3b484f" },
            }}
          >
            <Grid
              container
              sx={{ height: "100%" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid sx={{ height: "100px" }} />
              {list()}
            </Grid>
          </Drawer>
        </>
      )}
    </Grid>
  );
}
