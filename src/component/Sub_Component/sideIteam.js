import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import OrderForm from "../Sub_Component/Order_Form";

export default function Order_Page({ openState, handleOpenClose }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid item xs={10}></Grid>
    </Grid>
  );
}
