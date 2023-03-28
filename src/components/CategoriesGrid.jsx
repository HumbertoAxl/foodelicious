import { Box, Grid, Icon, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
const categories = [
  {
    title: "Popular",
    icon: <StarBorderOutlinedIcon/>,
  },
  {
    title: "Pasta",
    icon: <DinnerDiningOutlinedIcon/>,
  },
  {
    title: "Vegan",
    icon: <SpaOutlinedIcon />,
  },
  {
    title: "Baking",
    icon: <BakeryDiningOutlinedIcon />,
  },
  {
    title: "Barbecue",
    icon: <OutdoorGrillOutlinedIcon />,
  },
  {
    title: "Healthy",
    icon: <FavoriteBorderIcon />,
  },
  {
    title: "Premium",
    icon: <AttachMoneyIcon />,
  },
];

const CategoriesGrid = (props) => {
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
          <Grid item key={i} xs={12} sm={6} md={1.5} onClick={() => props.handleCategorySelection(category)}>
            <Box
              className={`${category.title === props.selectedCategory ? "selected" : ""}`}
              sx={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 2,
                boxShadow: 2,
                height: 40,
                width: 120,
                pl: 0.25,
                pr: 1,
                outline: "2px solid #dbd7d7",
                transition: "all 0.2s ease-in-out",
                ":hover":
                {
                  outline: "2px solid #1b9823",
                  cursor: "pointer",
                },
                ".icon>svg": {
                  height: 30,
                  width: 25
                },
                "&.selected": {
                  backgroundColor: "#1b9823",
                  cursor: "default",
                  outline: 0,
                },
                "&.selected > *": {
                  color: "white",
                }
              }}
            >
              <Icon className="icon" sx={{color: "green", ml: 0.5, mt: -2, width: 25}} fontSize="large">{category.icon}</Icon>
              <Typography variant="p" sx={{ml: 0.5}}>{category.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesGrid;
