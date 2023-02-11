// 액션 타입
const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

// 액션 생성 함수
export const like = () => ({
    type: LIKE
})
export const dislike = () => ({
    type: DISLIKE
})

// 초기값 
const initialState =  {
   getlike: 0,
   getdislike: 0
}

// 리듀서 함수 작성
export default function recoCount(state=initialState, action) {
    switch(action.type) {
        case LIKE:
            return {
                ...state,
                getlike: state.getlike + 1,
            };
        case DISLIKE:
            return {
                ...state,
                getdislike: state.getdislike + 1,
            };
        default:
            return state;
    }
}
