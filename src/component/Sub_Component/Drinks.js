import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { add, remove } from "../action/localstorageAction";

export default function Wings() {
  const [desert, setDesert] = React.useState("");
  const [qty, setQty] = React.useState("");

  const handleChangeDesert = (event) => {
    setDesert(event.target.value);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  function handleSubmitClick() {
    var newIteam = {
      TypeFood: "Drink",
      Drink: desert,
      qty: qty,
    };

    add(newIteam);
    window.location.reload();
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* This is the Grid  */}
        <Typography>Deseart</Typography>
        {/* This is the end of Card */}

        <Grid>
          <FormControl variant="outlined">
            <InputLabel
              id="demo-mutiple-chip-label"
              className={{ padding: "20px" }}
            >
              Drink
            </InputLabel>
            <Select
              value={desert}
              onChange={handleChangeDesert}
              displayEmpty
              label="Spicy"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Coco Cola"}>Coco Cola</MenuItem>
              <MenuItem value={"fanta"}>fanta</MenuItem>
              <MenuItem value={"Orange"}>Orange</MenuItem>
              <MenuItem value={"Water"}>Water</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl variant="outlined">
            <InputLabel
              id="demo-mutiple-chip-label"
              className={{ padding: "20px" }}
            >
              Qty
            </InputLabel>
            <Select
              value={qty}
              onChange={handleChangeQty}
              displayEmpty
              label="Qty"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Button variant={"outlined"} onClick={handleSubmitClick}>
          {" "}
          Add To List
        </Button>
      </Grid>
    </Grid>
  );
}
