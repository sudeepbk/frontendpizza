import { Grid } from "@material-ui/core";
import React from "react";
import Pizza from "../Sub_Component/Pizza";
import Wings from "../Sub_Component/Wings";
import Drinks from "../Sub_Component/Wings";
import Chocolate from "../Sub_Component/Desert";

export default function getAlliteam({ match }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* This is the end of Card */}
        {match.params.IteamName === "Pizza" && (
          <Pizza foodType={match.params.IteamName} />
        )}
        {match.params.IteamName === "Party Wings" && (
          <Wings foodType={match.params.IteamName} />
        )}
        {match.params.IteamName === "Drinks" && (
          <Drinks foodType={match.params.IteamName} />
        )}
        {match.params.IteamName === "Dessert" && (
          <Chocolate foodType={match.params.IteamName} />
        )}
      </Grid>
    </Grid>
  );
}
