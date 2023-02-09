import { combineReducers } from "redux";
import loginCheck from "./loginCheck";
import moviePost from "./moviePost";



const rootReducer = combineReducers({moviePost, loginCheck});

export default rootReducer;