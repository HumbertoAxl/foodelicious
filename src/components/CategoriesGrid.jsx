import { Box, Grid, Icon, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
const categories = [
  {
    title: "Vegan",
    icon: <AttachMoneyIcon/>,
  },
  {
    title: "Pasta",
    icon: <DinnerDiningIcon/>,
  },
  {
    title: "Baking",
    icon: <BakeryDiningIcon />,
  },
  {
    title: "Barbecue",
    icon: <AttachMoneyIcon />,
  },

  {
    title: "Cheap Meals",
    icon: <AttachMoneyIcon />,
  },
  {
    title: "Healthy Recipes",
    icon: <FavoriteIcon />,
  },
  {
    title: "Premium Recipes",
    icon: <AttachMoneyIcon />,
  },
];

const CategoriesGrid = () => {
  return (
    <Box>
      <Typography
        component="h4"
        variant="h5"
        align="left"
        color="text.primary"
        // gutterBottom
      >
                Categories
      </Typography>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {categories.map((category, i) => (
          <Grid item key={i} xs={12} sm={6} md={1.71}>
            <Box
              sx={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                border: "1px solid grey",
                height: 120,
                width: 120,
                p: 1,
                ":hover":
                {
                  backgroundColor: "#1b9823",
                  cursor: "pointer",
                  transition: "200ms"
                },
                ".icon>svg": {
                  height: 50,
                  width: 30
                },
                ":hover > *":
                {
                  color: "white",
                }
              }}
            >
              <Icon className="icon" sx={{color: "green"}} fontSize="large">{category.icon}</Icon>
              <Typography variant="p" sx={{mt: 2, ml: 1}}>{category.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesGrid;
