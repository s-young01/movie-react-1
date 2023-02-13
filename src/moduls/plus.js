import { combineReducers } from "redux";
import loginCheck from "./loginCheck";
import moviePost from "./moviePost";
import recoCount from "./recoCount";
import movieSelect from "./selectMovie";
import textList from "./writeFree";



const rootReducer = combineReducers({
    moviePost,
    loginCheck,
    recoCount,
    movieSelect,
    textList
});

export default rootReducer;