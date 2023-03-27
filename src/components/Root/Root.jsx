import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
      <Container sx={{mt: 10}}>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
