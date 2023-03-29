import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SearchBar from "./SearchBar.jsx";

const Root = () => {
  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar sx={{display: "flex", flexDirection: "row"}}>
        <Toolbar>
          <FoodBankIcon sx={{ width: 40, height: 40, mr: 2, ":hover":{boxShadow: 5, transition: "200ms", cursor: "pointer"} }} onClick={() => navigateToHome()}/>
          <Typography variant="h6" color="inherit" noWrap>
                        Foodelicious!
          </Typography>
        </Toolbar>
        <SearchBar/>
      </AppBar>
      <Container sx={{mt: 8}}>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
