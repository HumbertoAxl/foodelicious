import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const RecipesGrid = (props) => {
  const recipes = props.recipes;
  let navigate = useNavigate();
  const navigateToRecipe = (recipeData) => {
    let path = "recipe/" + recipeData.id;
    navigate(path, {state: recipeData});
  };
  return (
    // <Container sx={{ pt: 8 }} maxWidth="bg">
    <Box sx={{mt: 4}}>
      {/* End hero unit */}
      <Typography
        component="h4"
        variant="h5"
        align="left"
        color="text.primary"
        // gutterBottom
      >
        {props.title}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {recipes.map((recipe, i) => (
          <Grid item key={i} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
                ":hover": {
                  boxShadow: 5,
                  cursor: "pointer"
                },
              }}
              onClick={() => navigateToRecipe(recipe)}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  p: 0,
                }}
                image={recipe.image}
                alt="food-image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" sx={{ height: 64, lineHeight: 1.25 }}>
                  {recipe.title}
                </Typography>
                <Typography>"Very nice" - Borat Sagdiyev</Typography>
                <Divider sx={{mt: 1}} orientation="horizontal" />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2.5, height: 5 }}>
                  <ScheduleIcon sx={{mr: 1}} fontSize="extra-small" />
                  <Typography color="grey">{recipe.readyInMinutes ? recipe.readyInMinutes : "0"} mins</Typography>
                  <Rating
                    sx={{ ml: "auto" }}
                    defaultValue={
                      Math.floor((Math.random() * 5) / 0.5) * 0.5 + 3
                    }
                    emptyIcon={<StarIcon style={{ opacity: 0.75 }} fontSize="inherit" />}
                    precision={0.5}
                    readOnly
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    // </Container>
  );
}

export default RecipesGrid;