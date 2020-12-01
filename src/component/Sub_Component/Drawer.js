import { Chip, CircularProgress, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { remove } from "../action/localstorageAction";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const IteamOrdered = ({ ...props }) => {
  var oldOrderList = JSON.parse(localStorage.getItem("OrderedList"));

  if (oldOrderList === null) {
    return (
      <Grid item>
        <Typography>No Iteam to order</Typography>
      </Grid>
    );
  } else {
    return (
      <>
        {oldOrderList.map((element, i) => {
          if (element.TypeFood === "Pizza") {
            return (
              <Grid container style={{ textAlign: "left", padding: "10px" }}>
                <Grid item>
                  <Typography>
                    <strong>Iteam Name</strong> {element.TypeFood}
                  </Typography>
                  <Typography>
                    <strong>Qty</strong> {element.qty}
                  </Typography>
                  {element.toppings.map((elem, i) => {
                    return (
                      <>
                        {i % 2 == 0 ? (
                          <Chip
                            label={elem}
                            color="secondary"
                            style={{ margin: "5px" }}
                          />
                        ) : (
                          <Chip label={elem} />
                        )}
                      </>
                    );
                  })}
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      remove(i);
                      window.location.reload();
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
                <Divider></Divider>
              </Grid>
            );
          } else if (element.TypeFood === "Wings") {
            return (
              <Grid container style={{ textAlign: "left", padding: "10px" }}>
                <Grid item>
                  <Typography>
                    <strong>Iteam Name</strong> {element.TypeFood}
                  </Typography>
                  <Typography>
                    <strong>Qty</strong> {element.qty}
                  </Typography>
                  <Typography>
                    <strong>Spicy</strong> {element.Spicy}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      remove(i);
                      window.location.reload();
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
                <Divider></Divider>
              </Grid>
            );
          } else if (element.TypeFood === "Dessert") {
            return (
              <Grid container style={{ textAlign: "left", padding: "10px" }}>
                <Grid item>
                  <Typography>
                    <strong>Iteam Name</strong> {element.TypeFood}
                  </Typography>
                  <Typography>
                    <strong>Qty</strong> {element.qty}
                  </Typography>
                  <Typography>
                    <strong>Dessert</strong> {element.dessert}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      remove(i);
                      window.location.reload();
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
                <Divider></Divider>
              </Grid>
            );
          } else if (element.TypeFood === "Drink") {
            return (
              <Grid container style={{ textAlign: "left", padding: "10px" }}>
                <Grid item>
                  <Typography>
                    <strong>Iteam Name</strong> {element.TypeFood}
                  </Typography>
                  <Typography>
                    <strong>Qty</strong> {element.qty}
                  </Typography>
                  <Typography>
                    <strong>Drink</strong> {element.Drink}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      remove(i);
                      window.location.reload();
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
                <Divider></Divider>
              </Grid>
            );
          }
        })}
      </>
    );
  }
};

export default function RightDrawer({ ...props }) {
  console.log(props);
  const classes = useStyles();
  const history = useHistory();
  const [load, setload] = useState(false);
  const [localStorageValue, setlocalStorage] = useState();

  useEffect(() => {
    setlocalStorage(JSON.stringify(localStorage.getItem("OrderedList")));
  });

  const routeChange = () => {
    props.handleDrawerClose();
    window.location.href = "/order";
  };

  if (load) {
    return (
      <Grid>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={props.Drawer}
          onClose={props.handleDrawerClose}
        >
          <div className={clsx(classes.list)} style={{ textAlign: "center" }}>
            {localStorageValue == "null" || localStorageValue === undefined ? (
              <Grid item fullWidth justify="center">
                <Typography variant="h6">There is no content</Typography>
              </Grid>
            ) : (
              <Grid>
                <Grid item fullWidth justify="center">
                  <Typography variant="h6">Iteam ordered</Typography>
                  <IteamOrdered />
                </Grid>
                <Divider />
                <Button fullWidth onClick={routeChange}>
                  Checkout
                </Button>
              </Grid>
            )}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
