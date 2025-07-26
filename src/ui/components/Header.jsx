import React, { useState } from "react";
import "../style/header.scss";
import Logo from "../../public/images/Logo.webp";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItemButton>
              <Link to="/" className="header-button">
                Cryptocurrencies
              </Link>
            </ListItemButton>
            {/* <ListItemButton>
              <Link to="/news" className="header-button">
                Crypto News
              </Link>
            </ListItemButton> */}
            <ListItemButton>
              <Link to="/convert" className="header-button">
                Converter
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/whale-alert" className="header-button">
                WhaleAlert
              </Link>
            </ListItemButton>
            {/* <ListItemButton>
              <Link to="/crypto-blog" className="header-button">
                Blog
              </Link>
            </ListItemButton> */}
            {/* <ListItemButton>
              <Link to="/press" className="header-button">
                Press Release
              </Link>
            </ListItemButton> */}
            {/* <ListItemButton>
              <Link to="/contact-us" className="header-button">
                Contact Us
              </Link>
            </ListItemButton> */}
          </List>
        </Box>
      </Drawer>

      <header>
        <div className="wrapper-header">
          <Link to="/" className="header-logo">
            <LazyLoadImage src={Logo} alt="Logo" width={40} height={40} />

            <p>Cryptocurrency Prices Now</p>
          </Link>

          <FiMenu className="nav-menu-icon" onClick={toggleDrawer(true)} />

          <nav className="stroke">
            <ul className="ul-header">
              <li>
                <Link to="/" className="header-button">
                  Cryptocurrencies
                </Link>
              </li>

              {/* <li>
                <Link to="/news" className="header-button">
                  Crypto News
                </Link>
              </li> */}

              <li>
                <Link to="/convert" className="header-button">
                  Converter
                </Link>
              </li>

              {/* <li>
                <Link to="/crypto-blog" className="header-button">
                  Blog
                </Link>
              </li> */}

              <li>
              <Link to="/whale-alert" className="header-button">
              WhaleAlert
              </Link>
              </li>

              {/* <li>
                <Link to="/press" className="header-button">
                  Press Release
                </Link>
              </li> */}

              {/* <li>
                <Link to="/contact-us" className="header-button">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
