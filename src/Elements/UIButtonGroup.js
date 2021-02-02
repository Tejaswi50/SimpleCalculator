import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  buttonGroup: {
    "& *:not(:last-child)": {
      borderRight: "none",
    },
  },
  button: {
    padding: "0 1.5rem",
    backgroundColor: "#F5F7F9",
    color: "#000",
    boxShadow: "none",
    border: ".5px solid #b7b7b7",
    fontSize: ".8rem",
    fontWeight: "400",
  },
  passed: {
    backgroundColor: "green",
    color: "#fff",
  },
}));
const UIButtonGroup = (props) => {
  const classes = useStyle();
  return (
    <ButtonGroup {...props} className={classes.buttonGroup}>
      {props.children}
    </ButtonGroup>
  );
};

export const Btn = (props) => {
  const classes = useStyle();
  return (
    <Button disableRipple {...props}>
      {props.children}
    </Button>
  );
};

UIButtonGroup.Btn = Btn;
export default UIButtonGroup;
