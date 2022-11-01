import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import RabbitPaw from "../../assets/rabbitpaw.jpg";

export default function NavSignupPage(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="nav-bar">
        <div id="welcome-title">
          <h1>
            RABBIT <b id="first-word">TRACKS</b>
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
