import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import GenrePage from '../pages/GenrePage';

const moviePostData = async () => {
    const data = await axios.get(`${API_URL}/genrepage`);
    return data;
}

const GenreContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas(moviePostData));
    }, [dispatch]);
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    console.log(data)
    return (
            <GenrePage data={data}/>
    );
};

export default GenreContainer;