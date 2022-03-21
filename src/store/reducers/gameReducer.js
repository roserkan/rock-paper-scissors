import { SET_PICK } from "../actions/gameAction";
import { SET_SCORE } from "../actions/gameAction";

let initialState = {
  pick: null,
  score: 0,
};

export default function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PICK:
      return {
        ...state,
        pick: payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: payload,
      };
    default:
      return state;
  }
}
