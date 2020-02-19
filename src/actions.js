export const changeStageValues = (value) => ({
  type: "CALC_STAGE_VALUES",
  payload: value,
});

export const changeInputs = (value) => ({
  type: "CALC_INPUTS_VALUES",
  payload: value,
});

export const setTotal = (value) => ({
  type: "CALC_TOTAL_VALUES",
  payload: value,
});

export const setEvaluate = (value) => ({
  type: "CALC_EVALUATE_VALUES",
  payload: value,
});
