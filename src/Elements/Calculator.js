import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, makeStyles, Grid } from "@material-ui/core";
import UIInput from "./UIInput";
import UIButton from "./UIButton";
import UIButtonGroup from "./UIButtonGroup";
const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    borderBlockColor: "black",
    marginLeft: "16rem",
    marginTop: "9rem",
  },
  GroupButton: {
    backgroundColor: "#f5f7f9",
    color: "#000",
    border: ".5px solid #eceff3",
    fontWeight: "200",
  },
  pos: {
    marginBottom: 12,
  },
  lightthemebackground: {
    backgroundColor: "#fff",
    width: 400,
    height: 400,
    //borderBlockColor: "black",
    marginLeft: "16rem",
    marginTop: "9rem",
  },
  darkthemebackground: {
    width: 400,
    height: 400,
    // borderBlockColor: "black",
    marginLeft: "16rem",
    marginTop: "9rem",
    backgroundColor: "#000",
  },
  lightthemebutton: {
    backgroundColor: "#f0f0f0",
    color: "#000",
  },
  darkthemebutton: {
    backgroundColor: "#666",
    color: "#fff",
  },
});
const operators = ["+", "-", "*", "/"];

const calculate = (operands, operator) => {
  switch (operator) {
    case "+":
      return operands[0] + operands[1];
    case "-":
      return operands[0] - operands[1];
    case "*":
      return operands[0] * operands[1];
    case "/":
      return operands[0] / operands[1];
  }
};
export const Calculator = () => {
  const classes = useStyles();
  const [lightTheme, setLightTheme] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [scientificMode, setScientificMode] = useState(false);
  const [displayvalue, setDisplayValue] = useState({
    value: "",
    placholder: 0,
  });
  const [result, setResult] = useState(0);

  const showResultHandler = () => {
    const stack = [];
    let value = "";
    for (let i = 0; i < displayvalue.value.length; i++) {
      const curr = displayvalue.value[i];
      if (operators.includes(curr)) {
        if (stack.length > 0 && operators.includes(stack[stack.length - 1])) {
          const operator = stack.pop();
          const operand = stack.pop();
          const result = calculate([operand, +value], operator);
          stack.push(result);
          stack.push(curr);
          value = "";
        } else {
          stack.push(+value);
          stack.push(curr);
          value = "";
        }
      } else {
        value += curr;
      }
    }
    if (value && operators.includes(stack[stack.length - 1])) {
      const operator = stack.pop();
      const operand = stack.pop();
      const result = calculate([operand, +value], operator);

      setDisplayValue({
        value: result,
      });
    }
  };
  console.log(displayvalue.value);
  return (
    <Card
      className={
        lightTheme
          ? `${classes.lightthemebackground}`
          : darkTheme
          ? `${classes.darkthemebackground}`
          : `${classes.root}`
      }
    >
      <CardContent>
        <Grid container item xs={12}>
          <Grid item xs={12} style={{ heigh: "1rem" }}>
            <div style={{ backgroundColor: "white" }}>
              <UIInput
                disabled
                value={
                  displayvalue.value
                    ? displayvalue.value
                    : displayvalue.placholder
                }
              />
            </div>

            <Grid item xs={12} container style={{ marginTop: "1rem" }}>
              <Grid item xs={3}>
                <UIButton
                  color="default"
                  className={
                    lightTheme
                      ? `${classes.lightthemebutton}`
                      : darkTheme
                      ? `${classes.darkthemebutton}`
                      : ``
                  }
                  //value="1"
                  onClick={(event) => {
                    setDisplayValue({
                      value: displayvalue.value + 1,
                    });
                  }}
                >
                  1
                </UIButton>
              </Grid>
              <Grid item xs={3}>
                <UIButton
                  color="default"
                  onClick={(event) =>
                    setDisplayValue({
                      value: displayvalue.value + 2,
                    })
                  }
                  className={
                    lightTheme
                      ? `${classes.lightthemebutton}`
                      : darkTheme
                      ? `${classes.darkthemebutton}`
                      : ``
                  }
                >
                  2
                </UIButton>
              </Grid>
              <Grid item xs={3}>
                <UIButton
                  color="default"
                  onClick={(event) =>
                    setDisplayValue({
                      value: displayvalue.value + 3,
                    })
                  }
                  className={
                    lightTheme
                      ? `${classes.lightthemebutton}`
                      : darkTheme
                      ? `${classes.darkthemebutton}`
                      : ``
                  }
                >
                  3
                </UIButton>
              </Grid>
              <Grid item xs={3}>
                <UIButton
                  color="default"
                  onClick={(event) =>
                    setDisplayValue({
                      ...displayvalue,
                      value: displayvalue.value + "+",
                    })
                  }
                  className={
                    lightTheme
                      ? `${classes.lightthemebutton}`
                      : darkTheme
                      ? `${classes.darkthemebutton}`
                      : ``
                  }
                >
                  Add(+)
                </UIButton>
              </Grid>
              <Grid item xs={12} container style={{ marginTop: "0.5rem" }}>
                <Grid
                  item
                  xs={3}
                  onClick={(event) =>
                    setDisplayValue({
                      value: displayvalue.value + 4,
                    })
                  }
                >
                  <UIButton
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    color="default"
                  >
                    4
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 5,
                      })
                    }
                  >
                    5
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 6,
                      })
                    }
                  >
                    6
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + "-",
                      })
                    }
                  >
                    Subtract(-)
                  </UIButton>
                </Grid>
              </Grid>
              <Grid item xs={12} container style={{ marginTop: "0.5rem" }}>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 7,
                      })
                    }
                  >
                    7
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 8,
                      })
                    }
                  >
                    8
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 9,
                      })
                    }
                  >
                    9
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + "*",
                      })
                    }
                  >
                    Multiply(*)
                  </UIButton>
                </Grid>
              </Grid>{" "}
              <Grid item xs={12} container style={{ marginTop: "0.5rem" }}>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={() => setDisplayValue({ value: "0" })}
                  >
                    Clear
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + 0,
                      })
                    }
                  >
                    0
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={showResultHandler}
                  >
                    =
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
                    className={
                      lightTheme
                        ? `${classes.lightthemebutton}`
                        : darkTheme
                        ? `${classes.darkthemebutton}`
                        : ``
                    }
                    onClick={(event) =>
                      setDisplayValue({
                        value: displayvalue.value + "/",
                      })
                    }
                  >
                    Devide(/)
                  </UIButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <UIButton
              color="default"
              style={{ fontSize: "11px", marginTop: "1rem" }}
              onClick={() => setScientificMode(true)}
            >
              Scientific Mode
            </UIButton>
          </Grid>
          <Grid item xs={8} style={{ marginTop: "1rem" }}>
            <UIButtonGroup variant="contained" size="small">
              <UIButtonGroup.Btn
                className={classes.GroupButton}
                onClick={() => {
                  setDarkTheme(false);
                  setLightTheme(true);
                }}
              >
                <span>Light Theme</span>
              </UIButtonGroup.Btn>
              <UIButtonGroup.Btn
                className={classes.GroupButton}
                onClick={() => {
                  setLightTheme(false);
                  setDarkTheme(true);
                }}
              >
                <span>Dark Theme</span>
              </UIButtonGroup.Btn>
            </UIButtonGroup>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginTop: "1rem", marginLeft: "-3.5rem" }}
          >
            {scientificMode && (
              <UIButtonGroup variant="contained" size="small">
                <UIButtonGroup.Btn
                  className={classes.GroupButton}
                  onClick={() =>
                    setDisplayValue({
                      value:
                        displayvalue.value > 0
                          ? displayvalue.value * -1
                          : displayvalue.value < 0
                          ? displayvalue.value * -1
                          : displayvalue.value,
                    })
                  }
                >
                  Sign
                </UIButtonGroup.Btn>
                <UIButtonGroup.Btn
                  onClick={() =>
                    setDisplayValue({
                      value: displayvalue.value
                        ? displayvalue.value * displayvalue.value
                        : displayvalue.value,
                    })
                  }
                  className={classes.GroupButton}
                >
                  Square
                </UIButtonGroup.Btn>
                <UIButtonGroup.Btn
                  onClick={() =>
                    setDisplayValue({
                      value: displayvalue.value
                        ? Math.sqrt(displayvalue.value)
                        : displayvalue.value,
                    })
                  }
                  className={classes.GroupButton}
                >
                  Square Root
                </UIButtonGroup.Btn>
              </UIButtonGroup>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
