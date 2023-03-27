import { Stack, CircularProgress, Typography } from "@mui/material";

function Recipe() {
  // eslint-disable-next-line 
  let isLoaded = false;
  
  return (
    <Stack alignItems="center">
      <CircularProgress color="green"/>
      <Typography variant="body" color="initial" fontSize="1.5em" marginTop="1%" >Finding a delicious recipe...</Typography>
    </Stack>
  )
}

export default Recipe;