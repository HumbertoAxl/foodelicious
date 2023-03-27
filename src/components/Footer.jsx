import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#f7f7f7f7", mt: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {`© ${new Date().getFullYear()} Humberto Axl. All Rights Reserved.`}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Powered by
        {" "}
        <Link color="inherit" href="https://spoonacular.com/food-api">
        Spoondelicious API
        </Link>
        {"."}
      </Typography>
    </Box>
  );
}

export default Footer;