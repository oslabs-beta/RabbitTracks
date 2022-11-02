import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export default function NavSignupPage(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="nav-bar">
        <div id="welcome-title">
          <h1>
            RABBIT <b id="first-word">TRACKS</b> SIGN UP
            <br></br>
          </h1>
        </div>
        <div>
          <div id="welcome-statement">
            <h3>Start tracking your RabbitMQ message failures today!</h3>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
