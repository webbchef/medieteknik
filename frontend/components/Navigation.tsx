import React, { useState } from "react";
import {
  ListItemText,
  Box,
  Typography,
  List,
  Grid,
  ListItem,
  Drawer,
  IconButton,
} from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

/**
 * Component for menu
 * @returns
 */
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  const list = () => (
    <List>
      {[
        {
          name: "Hem",
          to: "/",
          submenu: [
            {
              title: "web design",
              url: "web-design",
            },
            {
              title: "web development",
              url: "web-dev",
            },
            {
              title: "SEO",
              url: "seo",
            },
          ],
        },
        { name: "Sektionen", to: "/about" },
        { name: "Studentliv", to: "/jour" },
        { name: "Dokument", to: "/settings" },
        { name: "Pluggportalen", to: "/report" },
      ].map((link, index) => (
        // <NavLink
        //   key={index}
        //   to={link.to}
        //   onClick={closeMenu}
        //   style={({ isActive }) =>
        //     isActive
        //       ? {
        //           textDecoration: "underline",
        //           textDecorationColor: "#3A3A3C",
        //         }
        //       : { textDecoration: "none" }
        //   }
        // >
        //   <ListItem button>
        //     <ListItemText>
        //       <Typography variant="h4">{link.name}</Typography>
        //     </ListItemText>
        //   </ListItem>
        // </NavLink>
        <ListItem>
          <Link href={link.to}>{link.name}</Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        {/* <img src={logo} alt="Logo" width="100px" height="50px" /> */}

        {/* <IconButton onClick={openMenu}>
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton> */}
        <Grid sx={{ position: "absolute", right: "20px", zIndex: 9999 }}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </Grid>
      </Box>

      <Drawer
        anchor="right"
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
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid sx={{ height: "100px" }} />
          {list()}
        </Grid>
      </Drawer>
    </Grid>
  );
}
