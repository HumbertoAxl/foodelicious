import { useState, useEffect } from "react";
import CategoriesGrid from "../../components/CategoriesGrid";
import RecipesGrid from "../../components/RecipesGrid";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import recipeData from "../../mock-api/api-return.json"
import { Box, Container, CssBaseline, Pagination, Typography } from "@mui/material";

export default function Home() {
  // let navigate = useNavigate();
  // const routeChange = (route) => {
  //   let path = "recipe";
  //   navigate(path);
  // };
  
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  
  useEffect(() => {
    loadRecipesTest();
  }, []);
  const handleCategorySelection = (categories) => {
    setSelectedCategory(categories.title);
    // alert("Filtering by... " + categories.title);
  }
  
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
          <CategoriesGrid selectedCategory={selectedCategory} handleCategorySelection={(categories) => handleCategorySelection(categories)}/>
        </Container>
        <Container>
          {recipes.length > 0 ? 
            <div>
              <RecipesGrid recipes={recipes} title={`${selectedCategory} Recipes`} /> 
              {/* <Pagination count={10} /> */}
            </div>
            : "Loading..."}
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
  