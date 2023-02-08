import axios from "axios";
import { API_URL } from "../config/apiurl";


//액션타입
const GET_DATAS_REC = "moviePost/GET_DATAS_REC";
const GET_DATAS_SUCCESS_REC = "moviePost/GET_DATAS_SUCCESS_REC";
const GET_DATAS_ERROR_REC = "moviePost/GET_DATAS_ERROR_REC";
const GET_DATA_REC = "moviePost/GET_DATA_REC";
const GET_DATA_SUCCESS_REC = "moviePost/GET_DATA_SUCCESS_REC";
const GET_DATA_ERROR_REC = "moviePost/GET_DATA_ERROR_REC";

//초기값
const initialState = {
    moviePosts: {
        loading: false,
        data: null,
        error: null
    },
    moviePost: {
        loading: false,
        data: null,
        error: null
    }
}

//리듀서만들기
export const getDatas_REC = () => async dispatch => {
    dispatch({type: GET_DATAS_REC})
    try{
        const response = await axios.get(`${API_URL}/recomend`);
        const data = response.data
        dispatch({
            type: GET_DATAS_SUCCESS_REC, data : data
        })
    }
    catch(e){
        dispatch({type: GET_DATAS_ERROR_REC, error: e})        
    }
}
export const getData_REC = (no) => async dispatch => {
    dispatch({type: GET_DATA_REC})
    try{
        const response = await axios.get(`${API_URL}/recomend/${no}`);
        const data = response.data[0];
        dispatch({
            type: GET_DATA_SUCCESS_REC, data : data
        })
    }
    catch(e){
        dispatch({type: GET_DATA_ERROR_REC, error: e})        
    }
}


//리듀서 만들기
export default function moviePost_REC(state=initialState, action) {
    switch(action.type){
        case GET_DATAS_REC:
            return {
                ...state,
                moviePosts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATAS_SUCCESS_REC:
            return {
                ...state,
                moviePosts: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            };
        case GET_DATAS_ERROR_REC:
            return {
                ...state,
                moviePosts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        // 하나씩 받아올 때 
        case GET_DATA_REC:
            return {
                ...state,
                moviePost: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        
        case GET_DATA_SUCCESS_REC:
            return {
                ...state,
                moviePost: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            };
        case GET_DATA_ERROR_REC:
            return {
                ...state,
                moviePost: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;    
    }
}