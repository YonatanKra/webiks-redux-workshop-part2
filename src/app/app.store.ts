import { FluxStandardAction } from 'flux-standard-action';
import { Reducer } from 'redux';
import { tassign } from 'tassign';

export type Action = FluxStandardAction<any, any>;

export interface AppState {
  list:string[];
  selected:number;
}

export const INITIAL_STATE:AppState = {
  list: [],
  selected: -1
};

export function rootReducer(currState:AppState, action:Action):AppState {

  switch (action.type) {
    case "ADD_ITEM":
      return tassign(currState, {list: [...currState.list, action.payload]});
    case "DELETE_ITEM":
      return tassign(currState, {list: Array.from(currState.list).splice(action.payload, 1)});
    case "SELECT_ITEM":

      break;
    case "RESET":

      break;
  }
  return currState;
}
