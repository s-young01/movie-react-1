import axios from "axios";
import { API_URL } from "../config/apiurl";


//액션타입
const GET_DATAS = "moviePost/GET_DATAS";
const GET_DATAS_SUCCESS = "moviePost/GET_DATAS_SUCCESS";
const GET_DATAS_ERROR = "moviePost/GET_DATAS_ERROR";
const GET_DATA = "moviePost/GET_DATA";
const GET_DATA_SUCCESS = "moviePost/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "moviePost/GET_DATA_ERROR";

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
export const getDatas = callback => async dispatch => {
    dispatch({type: GET_DATAS})
    try{
        const response = await callback();
        console.log(response)
        const data = response.data
        //console.log(data)
        dispatch({
            type: GET_DATAS_SUCCESS, data : data
        })
    }
    catch(e){
        dispatch({type: GET_DATAS_ERROR, error: e})        
    }
}
export const getData = callback => async dispatch => {
    dispatch({type: GET_DATA})
    try{
        const response = await callback();
        const data = response.data[0];
        console.log(data)
        dispatch({
            type: GET_DATA_SUCCESS, data : data
        })
    }
    catch(e){
        dispatch({type: GET_DATA_ERROR, error: e})        
    }
}



//리듀서 만들기
export default function moviePost(state=initialState, action) {
    switch(action.type){
        case GET_DATAS:
            return {
                ...state,
                moviePosts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATAS_SUCCESS:
            return {
                ...state,
                moviePosts: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            };
        case GET_DATAS_ERROR:
            return {
                ...state,
                moviePosts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        // 하나씩 받아올 때 
        case GET_DATA:
            return {
                ...state,
                moviePost: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        
        case GET_DATA_SUCCESS:
            return {
                ...state,
                moviePost: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            };
        case GET_DATA_ERROR:
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