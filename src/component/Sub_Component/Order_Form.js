import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Field, Form, Formik, getIn } from "formik";
import * as yup from "yup";
import MuiPhoneNumber from "material-ui-phone-number";

import OrderFormSchema from "../Sub_Component/Order_Form_Validation";
export default function Order_Page() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  const stateRegex = /^[A-Z]{2}/;

  const orderSchema = yup.object({
    firstName: yup.string().required("This is required field"),
    lastName: yup.string().required("This is required field"),
    address: yup.string().required("This is required field"),
    secAddress: yup.string().required("This is required field"),
    city: yup.string().required("This is required field"),
    state: yup
      .string()
      .trim()
      .matches(stateRegex, "Invalid State")
      .required("This is required field"),
    zipCode: yup.number().required("This is required field"),
    phoneNumber: yup
      .string()
      .trim()
      .matches(
        phoneNumberRegex,
        "Please enter a valid phone number xxx-xxx-xxxx"
      )
      .required("This is required field"),
  });

  let defaultValues = {
    firstName: "",
    lastName: "",
    address: "",
    secAddress: "",
    city: "",
    state: "",
    zipCode: 11111,
    phoneNumber: "",
  };

  function handleFormSubmit(value) {
    console.log(value);
  }
  return (
    <Grid container style={{ marginTop: "20px" }} alignContent="center">
      <Grid item xs={10}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={defaultValues}
          validationSchema={orderSchema}
        >
          {({ errors, handleChange, touched, values, submitForm }) => {
            console.log(values, errors);
            return (
              <Grid container>
                <Grid item xs={6}>
                  <Form>
                    <Grid container xs={12} sm={12}>
                      {/*First Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.firstName}
                          name="firstName"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="firstName"
                          label="First Name"
                          autoFocus
                          helperText={
                            errors.firstName ? errors.firstName : null
                          }
                        />
                      </Grid>

                      {/*Last Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.lastName}
                          name="lastName"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="lastName"
                          label="Last Name"
                          autoFocus
                          helperText={errors.lastName ? errors.lastName : null}
                        />
                      </Grid>
                    </Grid>

                    <Grid container xs={12} sm={12}>
                      {/*Address 1*/}
                      <Grid item xs={12} sm={12}>
                        <TextField
                          error={errors.address}
                          name="address"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="address"
                          label="Address 1"
                          autoFocus
                          helperText={errors.address ? errors.address : null}
                        />
                      </Grid>
                    </Grid>

                    <Grid container xs={12} sm={12}>
                      {/*Address 2*/}
                      <Grid item xs={12} sm={12}>
                        <TextField
                          error={errors.secAddress}
                          name="secAddress"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="secAddress"
                          label="Address 2"
                          autoFocus
                          helperText={
                            errors.secAddress ? errors.secAddress : null
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid container xs={12} sm={12}>
                      {/*City*/}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.city}
                          name="city"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="firstName"
                          label="city"
                          autoFocus
                          helperText={errors.city ? errors.city : null}
                        />
                      </Grid>

                      {/*Last Name */}
                      <Grid item xs={12} sm={6}>
                        <FormControl variant="outlined">
                          <InputLabel id="demo-simple-select-filled-label">
                            State
                          </InputLabel>
                          <Select
                            error={errors.state}
                            name="state"
                            fullWidth
                            onChange={handleChange}
                            id="state"
                            label="State"
                            autoFocus
                            helperText={errors.state ? errors.state : null}
                          >
                            <MenuItem value={"MD"}>MD</MenuItem>
                            <MenuItem value={"PA"}>PA</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container xs={12} sm={12}>
                      {/*First Name */}
                      <Grid item xs={12} sm={12}>
                        <TextField
                          error={errors.zipCode && touched.zipCode}
                          name="zipCode"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="zipCode"
                          label="Zip Code"
                          autoFocus
                          helperText={
                            errors.zipCode && touched.zipCode
                              ? errors.zipCode
                              : null
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid container xs={12} sm={12}>
                      {/*First Name */}
                      <Grid item xs={12} sm={12}>
                        <TextField
                          error={errors.firstName && touched.firstName}
                          name="phoneNumber"
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          id="phoneNumber"
                          label="Phone Number"
                          autoFocus
                          helperText={
                            errors.phoneNumber ? errors.phoneNumber : null
                          }
                        />
                      </Grid>
                    </Grid>
                    <Button
                      variant={"outlined"}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Form>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h5">Ordered List</Typography>
                </Grid>
              </Grid>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
}
