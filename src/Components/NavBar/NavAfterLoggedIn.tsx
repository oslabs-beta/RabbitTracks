import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import RabbitPaw from "../../assets/images/rabbitpaw.jpg";

export default function NavAfterLoggedIn(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static" id="nav-bar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/userprojects">
              <img id="rabbit-paw-pic" src={RabbitPaw} />
            </Link>
          </Typography>

          {
            <>
              <div id="nav-title">
                <h2>
                  RABBIT <b id="first-word">TRACKS</b>
                </h2>
              </div>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle id="icon-button" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/messages/project1">
                    <MenuItem onClick={handleClose}>Project 1</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>Project 2</MenuItem>
                  <Link to="/signup">
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Link>
                </Menu>
              </div>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
