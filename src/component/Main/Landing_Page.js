import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import HighLightCard from "../Sub_Component/Highlight_Card";
import MenuCard from "../Sub_Component/Menu_Card";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function Landing_Page() {
  const classes = useStyles();

  // Declare a new state variable, which we'll call "count"
  const [menuList, setmenuList] = useState([
    {
      id: 1,
      name: "Pizza",
      subHeader: "Toppings",
      image:
        "https://www.pizzahut.com/assets/w/images/homepage_deal/sidekick_10tastemaker_v2_mobile_438x238.jpg",
      description:
        "A large disc of dough, covered with tomato paste, then either only grated cheese or pieces of mozzarella cheese, or other toppings like chopped vegetables, sausages, salami, etc. and cheese, which is then baked together in a very hot oven, then cut into slices so that one can eat it conveniently by taking one wedge-shaped slice at a time.",
      price: 12.99,
      ingrediant: [
        "Crust",
        "Tomato Sauce",
        "Cheese",
        "Toppings of Your Choice",
      ],
    },
    {
      id: 2,
      name: "Party Wings ",
      subHeader: "10 Pieces Buffalo wings",
      image:
        "https://www.pizzahut.com/assets/w/images/homepage_deal/Wings_SK_MBTB_1314x714.jpg",
      description:
        "Big, Meaty chicken wings,seasoned with our special mix of spices, deep fried to a perfect golden brown, tossed in a hot ans tangy Buffalo-style sauce, and served with buttermilk ranch dressing on the side",
      price: 9.99,
      ingrediant: [
        "Chicken wings",
        "Breaded with Texas fried chicken breading",
      ],
    },

    {
      id: 4,
      name: "Drinks",
      subHeader: "Enjoy your food with soft drink",
      image:
        "http://2.wlimg.com/product_images/bc-full/dir_14/390111/cold-drink-bottles-1181028.jpg",
      description: "Drinks like a soda, Kicks like an energy Drink",
      price: 2.75,
    },

    {
      id: 6,
      name: "Dessert",
      subHeader: "Cheesecake, Tiramisu, Chocolate Cake",
      image:
        "http://i2.wp.com/www.andicakes.com/wp-content/uploads/2010/03/Cheesecake-slice.jpg",
      description:
        "It's the finale. It's the last impression. A bad dessert can ruin the meal",
      price: 2.99,
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid
        item
        xs={7}
        md={10}
        style={{ display: "flex", flexWrap: "wrap", marginLeft: "0px" }}
        justify={"center"}
      >
        {/* Single Pizza*/}
        <HighLightCard />

        <Grid container style={{ marginTop: "20px" }}>
          <Grid item>
            <Typography variant="h4">MENU</Typography>
          </Grid>
        </Grid>

        {menuList.map((tile) => (
          <Grid>
            <MenuCard Menu={tile} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
