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

export default function Wings() {
  const [spicy, setSpicy] = React.useState("");
  const [qty, setQty] = React.useState("");

  const handleChangeSpicy = (event) => {
    setSpicy(event.target.value);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };
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
              Desert
            </InputLabel>
            <Select
              value={spicy}
              onChange={handleChangeSpicy}
              displayEmpty
              label="Spicy"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"chocolateCake"}>Chocolate Cake</MenuItem>
              <MenuItem value={"chesseCake"}>Chesse Cake</MenuItem>
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

        <Button variant={"outlined"}> Add To List</Button>
      </Grid>
    </Grid>
  );
}
