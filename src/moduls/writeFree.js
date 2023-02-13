import { getCookie } from "../util/cookie";

//액션타입
const DATA_UPDATE = "writeFree/DATA_UPDATE";

//액션 객체 생성
export const dataUpdate = () => ({
    type: DATA_UPDATE
})

//초기상태
let time = new Date()
const initialState = {
    textState:{
        t_title: "",
        t_desc: "",
        t_nickname: getCookie("usernickname"),
        t_date: time.toLocaleTimeString()
    }  
}

export default function textList(state=initialState, action){
    switch(action.type){
        case DATA_UPDATE:
            return {
                ...state,
                [action.name] : action.value
            };
        default:
            return state;    
    }
}