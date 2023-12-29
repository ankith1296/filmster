// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import { styled } from "@mui/system";
// import filmsterLogo from "./filmsterlogo.png";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#fff",
//   boxShadow: "none",
// }));

// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <StyledAppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <img src={filmsterLogo} alt="Filmster Logo" width="150px" />
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </StyledAppBar>
//   );
// }
// export default NavBar;

import React from "react";
import "./NavBar.css";
import filmsterLogo from "./filmsterlogo.svg";
import { useState } from "react";
import SearchInput from "./SearchInput";

import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import MobileSearchBar from "./MobileSearchBar";

const apiKey = "8c02b9a0bfd78dbd3138c39039b35cef";
export default function Navbar({ onSearchData }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  // const toggleSearch = () => {
  //   setIsSearchVisible(!isSearchVisible);
  // };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() !== "") {
      // Construct the API URL with the search term and API key
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

      // Make the API request
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            setSearchResults(data.results);
            // console.log("neeweww");
          } else {
            setSearchResults([]);
          }
        })
        .catch((error) => console.error("Error:", error));
    } else {
      // Clear the search results if the search term is empty
      setSearchResults([]);
    }
    // console.log("Search Term:", searchTerm);
    onSearchData(searchResults);
    console.log(searchResults);
  };

  return (
    <div>
      <div className="NavbarContainer">
        <div className="menuIcon">
          <Menu />
        </div>

        <div className="logoContainer">
          <img src={filmsterLogo} alt="logo" />
        </div>
        <div className="mobileSearch">
          <button onClick={handleSearchClick}>
            <Search />
          </button>
          {isSearchOpen && (
            <MobileSearchBar
              onSearch={handleSearch}
              onClose={handleCloseSearch}
              isSearchOpen={isSearchOpen}
            />
          )}
        </div>
        <div className="searchContainer">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="linksContainer">Login</div>
      </div>
    </div>
  );
}
