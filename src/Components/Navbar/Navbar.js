import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import About from "../About/About";
import Summary from "../Summary/Summary";
import Portfolio from "../Portfolio/Portfolio";
import ContactUS from "../ContactUS/ContactUS";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { Link } from "@mui/material";
import "./Navbar.css";

const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Summary", link: "#summary" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Contact", link: "#contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{ alignItems: "center", textAlign: "left", height: "80px" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Poppins Regular",
              fontSize: "1.7rem",
              letterSpacing: "1px",
            }}
          >
            Nayan
            <span
              style={{
                fontFamily: "Poppins Bold",
                fontSize: "1.5rem",
                letterSpacing: "1px",
              }}
            >
              Bhakhar
            </span>
          </Typography>
          <Box className="header">
            {navItems.map((item) => (
              <Link
                href={item.link}
                // variant="body2"
                // className="links"
                sx={{
                  fontFamily: "Poppins Regular",
                  fontSize: "1rem",
                  color: "white",
                  paddingRight: "0.5rem",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          <Home />
          <About />
          <Summary />
          <Portfolio />
          <ContactUS />
          <Footer />
        </Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
