import { useState, useEffect } from "react";
import CategoriesGrid from "../../components/CategoriesGrid";
import RecipesGrid from "../../components/RecipesGrid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";
import recipeData from "../../mock-api/api-return.json"

export default function Home() {
  // let navigate = useNavigate();
  // const routeChange = (route) => {
  //   let path = "recipe";
  //   navigate(path);
  // };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipesTest();
  }, []);

  return (
    <div>
      <CssBaseline />

      <Container
        sx={{
          bgcolor: "#f7f7f7",
          pt: 8,
          pb: 6,
        }}
      >
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="m">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              onClick={useNavigate("/")}
            >
                            Foodelicious!
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
                            Discover a wide range of recipes for all dietary needs and preferences,
                            including step-by-step
                            instructions and nutritional information.
            </Typography>
          </Container>
        </Box>
        <Container>
          <CategoriesGrid/>
        </Container>
        <Container>
          {recipes.length > 0 ? <RecipesGrid recipes={recipes} title="Popular Recipes" /> : "Loading..."}
        </Container>
        <Footer />
      </Container>
    </div>
  );

  function loadRecipesTest() {
    setTimeout(() => {
      let data = recipeData.recipes;
      setRecipes(data);
    }, 500)
  }
}
  