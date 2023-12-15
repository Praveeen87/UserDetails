import * as React from "react";
import { Button, Container } from "@mui/material";
import GenericInputField from "./TextField";

const UserEntry = () => {
  return (
    <Container
      sx={{
        height: "50vh",
        width: "80%",
        boxShadow: 4,
        mt: 20,
        p: 3,
      }}
      //margin={"0 auto"}
    >
      <GenericInputField
        label="FirstName"
        helperText="FirstName"
        errorStatus={false}
        type="onlyAlpha"
        maxLength={10}
        validate={true}
      />
      <GenericInputField
        label="LastName"
        helperText="LastName"
        errorStatus={false}
        type="onlyAlpha"
        maxLength={10}
        validate={true}
      />
      <GenericInputField
        label="Email"
        helperText="Email"
        errorStatus={false}
        type="email"
        validate={true}
      />
      <Button variant="contained" fullWidth>
        Add Me
      </Button>
    </Container>
  );
};

export default UserEntry;
