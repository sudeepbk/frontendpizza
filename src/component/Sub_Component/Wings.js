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
        <Typography>Wings</Typography>
        {/* This is the end of Card */}

        <Grid>
          <FormControl variant="outlined">
            <InputLabel
              id="demo-mutiple-chip-label"
              className={{ padding: "20px" }}
            >
              Spicy
            </InputLabel>
            <Select
              value={spicy}
              onChange={handleChangeSpicy}
              displayEmpty
              label="Spicy"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Mild"}>Mild</MenuItem>
              <MenuItem value={"Hot"}>Hold</MenuItem>
              <MenuItem value={"Barbecue"}>Barbecue</MenuItem>
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
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Button variant={"outlined"}> Add To List</Button>
      </Grid>
    </Grid>
  );
}
