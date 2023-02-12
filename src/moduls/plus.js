import { combineReducers } from "redux";
import loginCheck from "./loginCheck";
import moviePost from "./moviePost";
import recoCount from "./recoCount";
import movieSelect from "./selectMovie";



const rootReducer = combineReducers({
    moviePost,
    loginCheck,
    recoCount,
    movieSelect
});

export default rootReducer;