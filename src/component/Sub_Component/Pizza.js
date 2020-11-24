import {
  Avatar,
  Button,
  CardMedia,
  Chip,
  FormControl,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";

const names = [
  "Pepperoni",
  "Chicken",
  "Sausage",
  "Ground Beef",
  "Bacon",
  "Salami",
  "PineApple",
  "Ricotta Cheese",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 500,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Pizza({ foodType }) {
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("");
  const [qty, setQty] = React.useState("");
  const theme = useTheme();

  const classes = useStyles();

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeSize = (event) => {
    setAge(event.target.value);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  function handleSubmitClick() {
    var newOrderList = [];
    var newIteam = {
      TypeFood: foodType,
      toppings: personName,
      size: age,
      qty: qty,
    };

    if (localStorage.getItem("OrderedList") === "null") {
      newOrderList.push(newIteam);
      localStorage.setItem("OrderedList", JSON.stringify(newOrderList));
    } else {
      var oldOrderList = JSON.parse(localStorage.getItem("OrderedList"));

      oldOrderList.push(newIteam);
      localStorage.setItem("OrderedList", JSON.stringify(oldOrderList));
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* This is the Grid  */}

        <Typography variant={"h4"}>Pizza</Typography>

        <Grid>
          <FormControl className={classes.formControl} variant={"outlined"}>
            <InputLabel
              id="demo-mutiple-chip-label"
              className={{ padding: "20px" }}
            >
              Pizza Toppings
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              variant={"outlined"}
              id="demo-mutiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip
                      avatar={<Avatar>{value[0]}</Avatar>}
                      key={value}
                      variant={"outlined"}
                      label={value}
                      className={classes.chip}
                    />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel
              id="demo-mutiple-chip-label"
              className={{ padding: "20px" }}
            >
              Pizza Size
            </InputLabel>
            <Select
              value={age}
              onChange={handleChangeSize}
              displayEmpty
              label="Pizza Size"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"small"}>Small</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"Large"}>Large</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl className={classes.formControl} variant="outlined">
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
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Button variant={"outlined"} onClick={handleSubmitClick}>
          Add To List
        </Button>
        {/* This is the end of Card */}
      </Grid>
    </Grid>
  );
}
