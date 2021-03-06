import { Button, Chip, Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import OrderForm from "../Sub_Component/Order_Form";
import { remove } from "../action/localstorageAction";

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

export default function Order_Page() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid item xs={6}>
        <OrderForm />
      </Grid>
      <Grid item xs={6} style={{ maxHeight: "50vh", overflow: "auto" }}>
        <Typography variant="h5">Ordered Iteam</Typography>
        <IteamOrdered />
      </Grid>
    </Grid>
  );
}
