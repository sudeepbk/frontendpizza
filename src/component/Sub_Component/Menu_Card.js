import { Chip, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import FaceIcon from "@material-ui/icons/Face";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function detailPage() {
    alert("Test");
  }

  function handleDelete() {
    alert("Delete");
  }

  return (
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
          </CardActions>
        </Card>
        {/* This is the end of Card */}
      </Grid>
    </Grid>
  );
}
