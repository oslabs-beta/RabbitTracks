// This component represents a navigation bar for the login page
// It is responsible for rendering a welcome message and a statement on the page

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export default function NavLoginPage(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="nav-bar">
        <div id="welcome-title">
          <h1>
            WELCOME TO RABBIT <b id="first-word">TRACKS</b>
            <br></br>
          </h1>
        </div>
        <div>
          <div id="welcome-statement">
            <h3>Track. Reprocess. Repeat.</h3>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
