import React, { useRef, useState } from "react";
import { Button, Container } from "@mui/material";
import GenericInputField from "./TextField";
import axios from "axios";

const UserEntry = (props) => {
  const [enableAdd, setenableAdd] = useState(true);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const createUser = (props) => {
    let FirstName = firstNameRef.current.getinputValue();
    let LastName = lastNameRef.current.getinputValue();
    let Email = emailRef.current.getinputValue();

    if (FirstName.length > 0) {
      if (LastName.length > 0) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
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
        } else {
          emailRef.current.updateErrorstatus({
            field: "email",
            message:
              Email.length <= 0 ? "Email is required" : "Not a valid email",
          });
        }
      } else {
        lastNameRef.current.updateErrorstatus({
          field: "LastName",
          message: "LastName  is Required",
        });
        if (Email.length <= 0)
          emailRef.current.updateErrorstatus({
            field: "Email",
            message:
              Email.length <= 0 ? "Email is required" : "Not a valid email",
          });
      }
    } else {
      firstNameRef.current.updateErrorstatus({
        field: "FirstName",
        message: "FirstName  is required",
      });
      if (LastName.length <= 0)
        lastNameRef.current.updateErrorstatus({
          field: "LastName",
          message: "LastName  is required",
        });
      if (Email.length <= 0)
        emailRef.current.updateErrorstatus({
          field: "Email",
          message:
            Email.length <= 0 ? "Email is required" : "Not a valid email",
        });
    }
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
        erorStatus={false}
        type="onlyAlpha"
        maxLength={100}
        validate={true}
      />
      <GenericInputField
        ref={lastNameRef}
        label="LastName"
        helperText="LastName"
        errorStatus={false}
        type="onlyAlpha"
        maxLength={100}
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

      <Button
        variant="contained"
        fullWidth
        disabled={enableAdd ? false : true}
        onClick={() => createUser(props)}
      >
        Add Me
      </Button>
    </Container>
  );
};

export default UserEntry;
