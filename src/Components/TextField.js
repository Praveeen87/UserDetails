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

    let validInput = validateInput(
      type == "onlyAlpha" ? Alphacharregex : emailRegex,
      targetValue
    );
    if (validInput) {
      setinputValue(targetValue);
      seterrorStatus(false);
    } else {
      setinputValue(targetValue);
      seterrorStatus(true);
    }
  };

  useImperativeHandle(_ref, () => ({
    getinputValue: () => {
      return inputValue;
    },
    removeValue: () => {
      setinputValue("");
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
