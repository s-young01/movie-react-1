import { combineReducers } from "redux";
import loginCheck from "./loginCheck";
import moviePost from "./moviePost";
import recoCount from "./recoCount";



const rootReducer = combineReducers({
    moviePost,
    loginCheck,
    recoCount
});

export default rootReducer;