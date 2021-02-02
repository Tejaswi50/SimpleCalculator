import React from "react";
import {
  Button,
  CircularProgress,
  Icon,
  makeStyles,
  withStyles,
  Grid,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  buttonIcon: {
    fontSize: "0.7rem",
  },

  uiButton: {
    "& $buttonIcon": {
      fontSize: "0.8rem",
    },
  },
}));

const MoreOptionsButton = withStyles((theme) => ({
  root: {
    minWidth: "20px !important",
    paddingRight: "8px !important",
    paddingLeft: "8px !important",
  },
}))(Button);

const UIButton = (props) => {
  // const { icon } = props;
  const { icon, loading, ...restOfProps } = props;
  const classes = useStyle();
  const buttonIconProps = {};
  const cssClass = props.className
    ? props.className + ` ${classes.uiButton}`
    : classes.uiButton;
  buttonIconProps.startIcon = icon ? (
    <Icon fontSize="small" className={`${icon} ${classes.buttonIcon}`} />
  ) : null;

  //console.log(restOfProps);

  return (
    <Grid item xs={3}>
      <Button
        variant="contained"
        style={{ width: "5.6rem", fontSize: "11px" }}
        color="primary"
        disabled={props.loading || props.disabled}
        {...buttonIconProps}
        className={cssClass}
        {...restOfProps}
      >
        {props.loading ? (
          <CircularProgress color="primary" size="1.25rem" />
        ) : (
          props.children
        )}
      </Button>
    </Grid>
  );
};

UIButton.MoreOptionsButton = MoreOptionsButton;

export default UIButton;
