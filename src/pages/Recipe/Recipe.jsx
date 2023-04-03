import Loading from "../../components/Helpers/Loading";
import { useParams, useLocation } from "react-router-dom";
import { Container, List, ListItem, Typography } from "@mui/material";

const Recipe = () => {
  const recipeData = useLocation().state; //From state
  console.log(recipeData)
  const id = useParams().id;
  console.log(id)

  if (recipeData) {
    let instructions = recipeData.instructions.replace(/<ol>|<\/ol>|<li>|<\/li>/g, "\n");
    instructions = instructions.split("\n").filter((instruction) => instruction !== "");
    return (
      <Container sx={{backgroundColor: "#f7f7f7"}}>
        {recipeData.extendedIngredients.map((ingredient, index) => (
          <Typography key={index}>{ingredient.original}</Typography>
        ))}
        <List>
          {instructions.map((instruction, index) => (
            <ListItem key={index}>{`${index + 1} - ${instruction}`}</ListItem>
          ))}
        </List>
      </Container>
    )
  } else {
    return <Loading/>;
  }
}

export default Recipe;
