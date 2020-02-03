import React, { useState } from "react";
import "./App.scss";
import Display from "../components/Display";
import Buttons from "../components/Buttons";
import { connect } from "react-redux";
import {
  changeStageValues,
  changeInputs,
  setTotal,
  setEvaluate,
} from "../actions";

const mapStateToProps = (state) => ({
  stageValues: state.stageValues,
  inputs: state.inputs,
  total: state.total,
  evaluate: state.evaluate,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStageValues: (val) => dispatch(changeStageValues(val)),
  onChangeInputs: (val) => dispatch(changeInputs(val)),
  onSetTotal: (val) => dispatch(setTotal(val)),
  onSetEvaluate: (val) => dispatch(setEvaluate(val)),
});

const App = (props) => {
  const [stageValues, setStateValues] = useState("");
  const [inputs, setInputs] = useState("");
  const [total, setTotal] = useState("0");
  const [evaluate, setEvaluate] = useState(false);

  const clear = (e) => {
    setInputs("");
    setStateValues("");
    setTotal("0");
  };

  const addSign = (e) => {
    const currentSign = e.target.innerText;

    if (evaluate) {
      // if after been evaluated run this
      setEvaluate(false);
      setInputs(total + currentSign); // if the last inputs is evaluated, set total as inputs
    } else {
      setStateValues(currentSign); // set stageValues to currentSign
      setInputs(inputs + currentSign); // add the sign
    }
  };

  const toDecimal = () => {
    let decimal = ".";
    if (stageValues.includes(".")) return; // if it already a decimal return. no need for convertion.
    if (!stageValues || /[/+x-]$/.test(stageValues)) decimal = "0."; // if not initial value or ends with any of these "/+x-", begin decimal with "0."
    setStateValues(stageValues + decimal); // stageValues + currentValue
    setInputs(inputs + decimal); // all inputs + decimal
  };

  const handleNumbers = (e) => {
    const currentValue = e.target.innerText;
    const newInitValue = stageValues.replace(/[/+x-]$/, "");
    setStateValues(newInitValue + currentValue); // stageValues + currentValue
    setInputs(inputs + currentValue); // all inputs + currentValue
  };

  const calculate = (e) => {
    let input = inputs.replace(/x/g, "*");
    if (!input || input === "0" || /=/g.test(input)) return; // if not input do nothing
    let strNum = "" + eval(input);
    let evaluate =
      `${eval(input)}`.length > 9 ? eval(input).toPrecision(9) : eval(input);

    setInputs(input + " = " + evaluate);
    setTotal(evaluate + "");
    setStateValues("");
    setEvaluate(true);
  };

  const handleError = (currentValue) => {
    if (total.length > 10 || inputs.length > 20) {
      setInputs("DIGIT LIMIT MET");
      setTimeout(() => setInputs(currentValue), 2000);
      return true;
    }
  };

  const result = stageValues || total;

  return (
    <div id="calculator">
      <Display result={result} input={inputs} />
      <Buttons
        clear={clear}
        handleNumbers={handleNumbers}
        addSign={addSign}
        toDecimal={toDecimal}
        calculate={calculate}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
