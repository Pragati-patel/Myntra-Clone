// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import customStyles from "./styles.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f5f5f6",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "60% !important",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      fontSize: "14px",
      color: "#696e79",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const list = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"];

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  //   const handleMobileMenuOpen = (event) => {
  //     setMobileMoreAnchorEl(event.currentTarget);
  //   };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavoriteBorderRoundedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <WorkOutlineRoundedIcon />
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      className="w-full !bg-white"
      sx={{ boxShadow: "0 4px 12px 0 rgba(0,0,0,.05)" }}
    >
      <AppBar position="static">
        <Toolbar>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
            className="w-[56px] h-[36px]"
            alt="logo"
          />
          <div className={customStyles.list_wrapper}>
            {list?.map((item, index) => {
              return (
                <div className={customStyles.lits_item} key={index.toString()}>
                  {item}
                  {index === list.length - 1 && (
                    <span className="text-ff3f6c text-10 pl-1">NEW</span>
                  )}
                </div>
              );
            })}
          </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              className="flex flex-col"
            >
              {/* <Badge badgeContent={4} color="error"> */}
              <PersonOutlineRoundedIcon />
              <p className={customStyles.right_item}>Profile</p>

              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              className="flex flex-col"
            >
              {/* <Badge badgeContent={17} color="error"> */}
              <FavoriteBorderRoundedIcon />
              <p className={customStyles.right_item}>Wishlist</p>

              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className="flex flex-col"
            >
              <WorkOutlineRoundedIcon />
              <p className={customStyles.right_item}>Bag</p>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
