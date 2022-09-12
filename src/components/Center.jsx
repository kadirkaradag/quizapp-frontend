import { Grid } from "@mui/material";
import React from "react";

const Center = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "94vh" }}
    >
      <Grid item>{props.children}</Grid>
    </Grid>
  );
};

export default Center;
