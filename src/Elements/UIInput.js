import React from "react";
import {
  FormGroup,
  FormLabel,
  OutlinedInput,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  label: {
    marginBottom: ".4rem",
    color: "#717b87",
  },
  input: {
    "&:hover": {
      outline: "none",
    },
  },

  multilineInput: {
    height: "3rem",
  },
  required: {
    color: "#FA0523",
  },
});
const UIInput = (props) => {
  const {
    label,
    type,
    required,
    onBlur,
    onChange,
    onFocus,
    value,
    error,
    placeholder,
    multiline,
    name,
    formGroupStyle,
    labelStyle,
    inputStyle,
    maxLength,
    minLength,
    autoFocus,
    disabled = false,
  } = props;
  const classes = useStyles();
  return (
    <FormGroup style={formGroupStyle}>
      <FormLabel id={label} className={classes.label} style={labelStyle}>
        <Typography>
          <b> {label}</b>
          {required && (
            <React.Fragment>
              <span> </span>
              <span className={classes.required}>*</span>
            </React.Fragment>
          )}
        </Typography>
      </FormLabel>
      <OutlinedInput
        htmlFor={label}
        type={type}
        className={`${classes.input} ${
          multiline ? classes.multilineInput : ""
        }`}
        onFocus={onFocus}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        error={error ? true : false}
        multiline={multiline}
        name={name}
        style={inputStyle}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      {error && <FormHelperText error={true}>{error}</FormHelperText>}
    </FormGroup>
  );
};

export default UIInput;
