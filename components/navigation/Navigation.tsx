import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import {
  ListItemText,
  Box,
  Typography,
  List,
  Grid,
  ListItem,
  Drawer,
  Button,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import LoginIcon from "@mui/icons-material/Login";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "../general/SocialMediaIcons";
import styles from "./Navigation.module.css";
/**
 * Component for menu
 * @returns
 */
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  const router = useRouter();
  const currentRoute = router.pathname;

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
          : { flexDirection: "column", width: "100%", marginTop: "60px" },
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
        <ListItem
          key={index}
          sx={isMobile ? { m: "10px" } : {}}
          className={styles.center}
        >
          <Link
            href={link.to}
            onClick={closeMenu}
            legacyBehavior={false}
            // className={styles.link}
            className={currentRoute === link.to ? styles.active : styles.link}
          >
            <Typography
              variant="h4"
              className={bgColor ? styles.blackText : styles.whiteText}
            >
              {link.name}
            </Typography>
          </Link>
        </ListItem>
      ))}
      <ListItem
        className={styles.center}
        sx={isMobile ? { m: "10px" } : { cursor: "pointer" }}
      >
        {/* <LaunchIcon sx={{ fontSize: "14px" }} /> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.medieteknikdagen.se/"
          className={styles.link}
        >
          <Typography
            variant="h4"
            className={bgColor ? styles.blackText : styles.whiteText}
          >
            MÄSSA
          </Typography>
        </a>
      </ListItem>
      {!isDesktop && (
        <ListItem className={styles.center}>
          <Link
            href="https://old.medieteknik.nu/forum_cookie"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
            className={styles.link}
          >
            <Button
              variant="outlined"
              startIcon={<LoginIcon sx={{ color: "black" }} />}
            >
              <Typography
                variant="h4"
                className={bgColor ? styles.blackText : styles.whiteText}
              >
                LOGGA IN
              </Typography>
            </Button>
          </Link>
        </ListItem>
      )}
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
        bgColor && { backgroundColor: "white", boxShadow: 1 },
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
          {/* <Link href="/"> */}
          <Image
            alt="MT LOGO"
            src={
              bgColor
                ? "/images/logotyp_svart_text.png"
                : "/images/logotyp_vit_text.png"
            }
            // style={{ cursor: "pointer" }}
            width="80px"
            height="50px"
          />
          {/* </Link> */}
          {list()}
          <Link
            href="https://old.medieteknik.nu/forum_cookie"
            target="_blank"
            rel="noopener"
          >
            <Button
              variant="outlined"
              startIcon={
                <LoginIcon sx={{ color: bgColor ? "black" : "white" }} />
              }
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "15px" }}
                className={bgColor ? styles.blackText : styles.whiteText}
              >
                LOGGA IN
              </Typography>
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
            sx={{ zIndex: 101 }}
            open={isOpen}
            onClose={closeMenu}
            transitionDuration={600}
            PaperProps={{
              sx: isMobile
                ? { width: "100%", backgroundColor: "#dbdbdb" }
                : { width: "50%", backgroundColor: "#dbdbdb" },
            }}
          >
            <Grid
              container
              sx={{ height: "100%", p: 3 }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              {list()}

              <Grid item>
                <Image
                  alt="MT LOGO"
                  src="/images/logotyp_svart_text.png"
                  width="110px"
                  height="70px"
                />
                <SocialMediaIcons />
              </Grid>
            </Grid>
          </Drawer>
        </>
      )}
    </Grid>
  );
}
