import React, { useState, useContext } from "react";
import {
  ListItemText,
  Box,
  Typography,
  List,
  Grid,
  ListItem,
  IconButton,
  Avatar,
  Drawer,
  Button,
  Icon,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { MobileStateContext } from "../../contexts/MobileContexts";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logotyp_svart_text.png";
import LaunchIcon from "@mui/icons-material/Launch";

/**
 * Component for menu
 * @returns
 */
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

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
          name: "Hem",
          to: "/",
        },
        { name: "Studentliv", to: "/studentliv" },
        { name: "Om MT", to: "/about" },
        { name: "Sektionen", to: "/sektionen" },
      ].map((link, index) => (
        <ListItem key={index}>
          <Link href={link.to} onClick={closeMenu} legacyBehavior={false}>
            {link.name}
          </Link>
        </ListItem>
      ))}
      <ListItem>
        <LaunchIcon sx={{ fontSize: "14px" }} />
        <Link href="https://www.medieteknikdagen.se/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Mässa
          </a>
        </Link>
      </ListItem>
    </List>
  );

  return (
    <Grid
      sx={{
        p: 2,
        position: "fixed",
        zIndex: 999,
        top: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
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
          <Button variant="outlined" startIcon={<LoginIcon />}>
            Logga in
          </Button>
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
