import React from "react";
import classes from "./NotFound.module.css";
import ErrorLinks from "../../components/ErrorLinks/ErrorLinks";
import { Paper } from "@mui/material";
import { color, variant, chosenClassName } from "../../helpers/randomizer";

const NotFound = () => {
  return (
    <div className={classes.centered}>
      <Paper variant={variant} sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color, textAlign: "center" }}>404 - Page Not Found</h2>
        <p className={chosenClassName}>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
      </Paper>
    </div>
  );
};

export default NotFound;