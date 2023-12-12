import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AppBar, Toolbar, Button, List, ListItem, Box } from "@mui/material";

function Menu() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <List
            component="nav"
            aria-label="Main menu"
            style={{ display: "flex" }}
          >
            <ListItem style={{ marginRight: "0.1rem" }}>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
            </ListItem>
            <ListItem style={{ marginRight: "0.1rem" }}>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
            </ListItem>
            {isAuthenticated && (
              <>
                <ListItem style={{ marginRight: "0.1rem" }}>
                  <Button component={Link} to="/dashboard" color="inherit">
                    Dashboard
                  </Button>
                </ListItem>
                <ListItem style={{ marginRight: "0.1rem" }}>
                  <Button component={Link} to="/Budgets" color="inherit">
                    BUDGET
                  </Button>
                </ListItem>
                <ListItem style={{ marginRight: "0.1rem" }}>
                  <Button component={Link} to="/Expenses" color="inherit">
                    EXPENSES
                  </Button>
                </ListItem>
              </>
            )}
            {!isAuthenticated && (
              <>
                <ListItem style={{ marginLeft: "70vw" }}>
                  <Button component={Link} to="/login" color="inherit">
                    Login
                  </Button>
                </ListItem>
                <ListItem>
                  <Button component={Link} to="/SIGNUP" color="inherit">
                    SignUp
                  </Button>
                </ListItem>
              </>
            )}
            {isAuthenticated && (
              <ListItem sx={{ marginLeft: "50vw" }}>
                <Button color="inherit" onClick={logout}>
                  LOGOUT
                </Button>
              </ListItem>
            )}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
