import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NavAfterLoggedIn(): JSX.Element {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    event.preventDefault();
    await axios
      .post("/auth/logout")
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="nav-bar">
        <Toolbar>
          {
            <>
              <h2 id="header-title">
                RABBIT <b id="first-word">TRACKS</b>
              </h2>
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
                  <Link to="/">
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
