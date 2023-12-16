import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState, forwardRef, useImperativeHandle } from "react";

const GenericInputField = forwardRef((props, _ref) => {
  const { label, helperText, maxLength, type, validate = false } = props;

  const [inputValue, setinputValue] = useState("");
  const [errorStatus, seterrorStatus] = useState(false);
  const [helperMessage, setHelperMessage] = useState(helperText);

  const validateInput = (pattern, input) => {
    if (validate) {
      var validInput = pattern.test(input);
    }
    return validInput;
  };

  const onChangeHandler = (e = {}) => {
    let targetValue = e?.target?.value;
    let Alphacharregex = /^[a-zA-Z]+$/;
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let validInput =
      targetValue.length > 0
        ? validateInput(
            type == "onlyAlpha" ? Alphacharregex : emailRegex,
            targetValue
          )
        : true;
    if (validInput) {
      setinputValue(targetValue);
      seterrorStatus(false);
      setHelperMessage("");
    } else {
      //let removenumbers = targetValue.replace(/[0-9]/g, "");

      if (type != "onlyAlpha") {
        setinputValue(targetValue);
        seterrorStatus(true);
        setHelperMessage("Not a valid email");
      }
      // setHelperMessage("Only Alphabets allowed");
    }
  };

  useImperativeHandle(_ref, () => ({
    getinputValue: () => {
      return inputValue;
    },
    removeValue: () => {
      setinputValue("");
    },
    updateErrorstatus: (val) => {
      seterrorStatus(true);
      if (typeof val === "object") setHelperMessage(val?.message);
    },
  }));

  return (
    <Box sx={{ p: 1 }}>
      <TextField
        fullWidth
        error={errorStatus}
        id={label}
        label={label}
        variant="outlined"
        helperText={errorStatus ? helperMessage : ""}
        onChange={onChangeHandler}
        value={inputValue}
        inputProps={{ maxLength }}
      />
    </Box>
  );
});

export default GenericInputField;
