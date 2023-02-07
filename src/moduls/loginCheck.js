//액션타입
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';



//액션생성함수
export const setLogin = () => ({
    type: SET_LOGIN
})

export const setLogout = () => ({
    type: SET_LOGOUT
})

//홈으로 이동하는 함수
export const goToHome = (navigate) => ()=> {
    navigate('/');
}

//초기값 생성
const initialState = {
    isLogin: false,
}

export default function loginCheck(state=initialState, action){
    switch(action.type){
        case SET_LOGIN:
            return {
                isLogin: true
            }
        case SET_LOGOUT:
            return {
                isLogin: false
            }
        default:
            return state
    }
}