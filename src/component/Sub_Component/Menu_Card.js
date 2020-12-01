import { Chip, Grid, IconButton, Tooltip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 340,
    margin: "10px",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Menu_Card({ Menu }) {
  const classes = useStyles();

  function handleDelete() {}

  return (
    <a href={`/specificIteam/${Menu.name}`} style={{ textDecoration: "none" }}>
      <Grid container>
        <Grid item xs={12}>
          {/* This is the Grid  */}
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={Menu.image}
              title="Paella dish"
            />
            <Grid>
              <Grid item></Grid>
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {Menu.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  maxHeight: "100px",
                  minHeight: "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                }}
              >
                {Menu.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Chip
                icon={<FaceIcon />}
                label="Order Now"
                onClick={handleDelete}
                color="secondary"
              />
              <Tooltip title="Add to Order list">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{ marginLeft: "10px" }}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
          {/* This is the end of Card */}
        </Grid>
      </Grid>
    </a>
  );
}
