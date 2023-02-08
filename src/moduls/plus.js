import { combineReducers } from "redux";
import loginCheck from "./loginCheck";
import moviePost from "./moviePost";
import moviePost_REC from "./recomendPost";



const rootReducer = combineReducers({moviePost, loginCheck, moviePost_REC});

export default rootReducer;