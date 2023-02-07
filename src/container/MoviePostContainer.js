import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatas } from '../moduls/moviePost';
import NewMoviePage from '../pages/NewMoviePage';

const MoviePostContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(getDatas());
    }, [dispatch]);
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <NewMoviePage data={data}/>
    );
};

export default MoviePostContainer;