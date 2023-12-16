import React, { useRef, useState } from "react";
import { Button, Container } from "@mui/material";
import GenericInputField from "./TextField";
import axios from "axios";

const UserEntry = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const createUser = (props) => {
    let FirstName = firstNameRef.current.getinputValue();
    let LastName = lastNameRef.current.getinputValue();
    let Email = emailRef.current.getinputValue();

    let enteredUSerDetails = {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
    };

    axios
      .post("http://localhost:4000/createuser", enteredUSerDetails)
      .then((res) => {
        props.userAdded(res.data);
        firstNameRef.current.removeValue();
        lastNameRef.current.removeValue();
        emailRef.current.removeValue();
      });
  };

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
        ref={firstNameRef}
        label="FirstName"
        helperText="FirstName"
        errorStatus={false}
        type="onlyAlpha"
        maxLength={10}
        validate={true}
      />
      <GenericInputField
        ref={lastNameRef}
        label="LastName"
        helperText="LastName"
        errorStatus={false}
        type="onlyAlpha"
        maxLength={10}
        validate={true}
      />
      <GenericInputField
        ref={emailRef}
        label="Email"
        helperText="Email"
        errorStatus={false}
        type="email"
        validate={true}
      />
      <Button variant="contained" fullWidth onClick={() => createUser(props)}>
        Add Me
      </Button>
    </Container>
  );
};

export default UserEntry;
