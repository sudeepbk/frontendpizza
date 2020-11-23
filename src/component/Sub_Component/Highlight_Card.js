import { CardMedia, Chip, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    marginTop: "10px",
    height: 400,
  },
}));

export default function Menu_Card({ Menu }) {
  const classes = useStyles();

  function detailPage() {
    alert("Test");
  }

  function handleDelete() {
    alert("Test");
  }

  return (
    <Grid container>
      <Grid item xs={12} style={{ position: "relative", display: "block" }}>
        <CardMedia
          className={classes.media}
          image="https://www.pizzahut.com/assets/w/images/homepage_deal/sidekick_10tastemaker_v2_mobile_438x238.jpg"
          title="Contemplative Reptile"
        />
      </Grid>
    </Grid>
  );
}
