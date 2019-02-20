import {ADD_GOAL, REMOVE_GOAL} from "../actions/goals";
import {RECEIVED_DATA} from "../actions/shared";

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case RECEIVED_DATA:
      return action.goals;
    default:
      return state
  }
}