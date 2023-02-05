import { combineReducers } from "redux";
import moviePost from "./moviePost";



const rootReducer = combineReducers({moviePost:moviePost});

export default rootReducer;