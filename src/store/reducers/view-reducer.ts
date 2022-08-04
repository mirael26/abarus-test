import { ViewAction, ViewState } from "../../types";
import { ActionType } from "../action";

const initialState: ViewState = {
  currentPage: 1,
  pagesCount: null,
};

export const viewReducer = (state = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case ActionType.UPDATE_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case ActionType.UPDATE_PAGES_COUNT:
      return {...state, pagesCount: action.payload};
    default:
      return state;
  }
};