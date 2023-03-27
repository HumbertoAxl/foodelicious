import Loading from "../../components/Helpers/Loading";
import { useParams, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
const Recipe = () => {
  const recipeData = useLocation().state; //From state
  console.log(recipeData)
  const id = useParams().id;
  if (recipeData) {
    return (
      <Typography variant="h6">
        {recipeData.title}
      </Typography>
    )
  }
  else {
    <Loading/>
  }
}

export default Recipe;