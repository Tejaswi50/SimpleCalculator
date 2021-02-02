import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, makeStyles, Grid } from "@material-ui/core";
import UIInput from "./UIInput";
import UIButton from "./UIButton";
const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    borderBlockColor: "black",
    marginLeft: "16rem",
    marginTop: "9rem",
  },

  pos: {
    marginBottom: 12,
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
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12}>
          <Grid item xs={12} style={{ heigh: "1rem" }}>
            <UIInput
              disabled
              value={
                displayvalue.value
                  ? displayvalue.value
                  : displayvalue.placholder
              }
            />
            <Grid item xs={12} container style={{ marginTop: "1rem" }}>
              <Grid item xs={3}>
                <UIButton
                  color="default"
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
                  <UIButton color="default">4</UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
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
                    onClick={() => setDisplayValue({ value: 0 })}
                  >
                    Clear
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
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
                  <UIButton color="default" onClick={showResultHandler}>
                    =
                  </UIButton>
                </Grid>
                <Grid item xs={3}>
                  <UIButton
                    color="default"
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
        </Grid>
      </CardContent>
    </Card>
  );
};
