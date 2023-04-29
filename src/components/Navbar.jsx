import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Style.css";
// import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About", "Project", "Contect"];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xll" className="Nav_bar3">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/Home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "crusion",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                AK
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: "crusion" }}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "orange" }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "crusion",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "pink",
                textDecoration: "none",
              }}
            >
              <Link style={{ textDecoration: "none",  }} to={"/"}>
              Arslan Khan
              </Link>
            </Typography>
            <Box mr={7}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "crusion", fontWeight: "700" }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "purple" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box ml={-6}>
            <Button  className="resumebtn"
              href="https://drive.google.com/uc?id=1StsavD2zJTDHScxPtiDlujK0jPKhZOcc&export=download"
            >
              <Typography color='purple'
                    sx={{ fontFamily: "crusion", fontWeight: "bold" }}>
                Resume
              </Typography>
            </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
