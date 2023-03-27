import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ borderRadius: 3, height: 40, ml: "auto", mr: 3, my: "auto", display: "flex", width: 350 }}
    >
      <IconButton type="button" aria-label="search" onClick={(() => console.log("kek"))}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 40, my: 0.5 }} orientation="vertical"/>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for recipes"
        color="grey"
      />
    </Paper>
  );
}
