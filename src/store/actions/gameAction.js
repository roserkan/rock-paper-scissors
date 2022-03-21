export const SET_PICK = "SET_PICK";
export const SET_SCORE = "SET_SCORE";

export function setPick(pick) {
  return {
    type: SET_PICK,
    payload: pick,
  };
}

export function setScore(score) {
  return {
    type: SET_SCORE,
    payload: score,
  };
}
