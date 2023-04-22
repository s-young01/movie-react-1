//액션타입
const GET_SELECT = "selectMovie/GET_SELECT";



//액션 생성함수 생성
export const setSelect = (id) => ({
    type: GET_SELECT,
    id: id
})

//초기값
const isGenre = 
   [
        {id: 1, genrelist:"전체", genrechange: "전체", isDone: false},
        {id: 2, genrelist:"액션",genrechange: "액션", isDone: false},
        {id: 3, genrelist:"호러/공포", genrechange: "공포", isDone: false},
        {id: 4, genrelist:"애니메이션", genrechange: "애니메이션", isDone: false},
        {id: 5, genrelist:"스릴러/미스테리", genrechange: "스릴러", isDone: false},
        {id: 6, genrelist:"어드벤처", genrechange: "어드벤처", isDone: false},
        {id: 7, genrelist:"판타지", genrechange: "판타지", isDone: false},
        {id: 8, genrelist:"슈퍼히어로", genrechange: "슈퍼히어로", isDone: false},
        {id: 9, genrelist:"SF", genrechange: "SF", isDone: false},
        {id: 10, genrelist:"음악", genrechange: "음악", isDone: false},
        {id: 11, genrelist:"시대극", genrechange: "시대극", isDone: false},
        {id: 12, genrelist:"멜로", genrechange: "멜로", isDone: false},
        {id: 13, genrelist:"드라마", genrechange: "드라마", isDone: false},
        {id: 14, genrelist:"가족", genrechange: "가족", isDone: false},
        {id: 15, genrelist:"스포츠", genrechange: "스포츠", isDone: false},
        {id: 16, genrelist:"코미디", genrechange: "코미디", isDone: false},
        {id: 17, genrelist:"범죄", genrechange: "범죄", isDone: false},
        {id: 18, genrelist:"밀리터리", genrechange: "밀리터리", isDone: false},
        {id: 19, genrelist:"재난", genrechange: "재난", isDone: false}
    ]



//리듀서 만들기
export default function movieSelect(state=isGenre, action) {
    switch(action.type){
        // 하나씩 받아올 때 
        case GET_SELECT:
            return state.map(gen=>gen.id === action.id ? {
                    ...gen,
                    isDone: !gen.isDone
                }: gen.id !== action.id && gen.isDone === true ? {
                    ...gen,
                    isDone: !gen.isDone 
                }: gen)      
        default:
            return state;    
    }
}