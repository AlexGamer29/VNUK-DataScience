import { combineReducers } from "redux";
import userReducer from "./user";
import State from "@/app-redux/enties/interfaces/state";

const reducer = combineReducers<State>({
  user: userReducer,
});

export const initState: State = {
  user: null,
};

export default reducer;
