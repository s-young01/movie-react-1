import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getData } from '../moduls/moviePost';
import MovieDetail from '../pages/subpages/MovieDetail';



const MoviePostDetail = () => {
    const {no} = useParams();
    const {loading, data, error} = useSelector(state => state.moviePost.moviePost);
    const dispatch = useDispatch();
    const postDetail = async () => {
        const data = await axios.get(`${API_URL}/detail/${no}`)
        return data
    }
    console.log(data);
    useEffect(() => {
        dispatch(getData(postDetail));
    }, [dispatch,no]);
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <MovieDetail data={data}/>
    );
};

export default MoviePostDetail;