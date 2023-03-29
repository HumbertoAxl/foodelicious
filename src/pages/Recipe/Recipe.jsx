import Loading from "../../components/Helpers/Loading";
import { useParams, useLocation } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Container, Divider, Rating, Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarIcon from "@mui/icons-material/Star";
import { width } from "@mui/system";
const Recipe = () => {
  const recipeData = useLocation().state; //From state
  console.log(recipeData)
  const id = useParams().id;
  if (recipeData) {
    return (
      <Container sx={{backgroundColor: "#f7f7f7"}}>
        <Typography variant="h4" align="center">
          {recipeData.title}
        </Typography>
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
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              p: 0,
              height: 200,
              width: 200
            }}
            image={recipeData.image}
            alt="food-image"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="h3" sx={{ height: 64, lineHeight: 1.25 }}>
              {recipeData.title}
            </Typography>
            <Divider sx={{mt: 1}} orientation="horizontal" />
            <Box sx={{ display: "flex", alignItems: "center", mt: 2.5, height: 5 }}>
              <ScheduleIcon sx={{mr: 1}} fontSize="extra-small" />
              <Typography color="grey">{recipeData.readyInMinutes ? recipeData.readyInMinutes : "0"} mins</Typography>
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
      </Container>
    )
  }
  else {
    <Loading/>
  }
}

export default Recipe;