import logo from "../assets/images/logo.jpeg";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import auth from "../lib/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";


const isActive = (location, path) =>
  location.pathname === path ? "#ff4081" : "#ffffff";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        {/* Logo + Title */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
          }}
        >
          <img
            src={logo}
            alt="Pastel Planner logo"        // ✅ accessibility
            style={{
              height: 60,
              marginRight: 8,
              borderRadius: 8,
            }}
          />
          <Typography variant="h6">MERN Skeleton</Typography>
        </Link>

        <Link to="/">
          <IconButton aria-label="Home" sx={{ color: isActive(location, "/") }}>
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/users">
          <Button sx={{ color: isActive(location, "/users") }}>USERS</Button>
        </Link>

        {!auth.isAuthenticated() && (
          <>
            <Link to="/signup">
              <Button sx={{ color: isActive(location, "/signup") }}>SIGN UP</Button>
            </Link>
            <Link to="/signin">
              <Button sx={{ color: isActive(location, "/signin") }}>SIGN IN</Button>
            </Link>
          </>
        )}

        {auth.isAuthenticated() && (
          <>
            <Link to={`/user/${auth.isAuthenticated().user._id}`}>
              <Button
                sx={{
                  color: isActive(
                    location,
                    `/user/${auth.isAuthenticated().user._id}`
                  ),
                }}
              >
                My Profile
              </Button>
            </Link>
            <Button
              sx={{ color: "#ffffff" }}
              onClick={() => {
                auth.clearJWT(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
