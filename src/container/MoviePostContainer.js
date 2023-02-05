import React from 'react';
import { useSelector } from 'react-redux';

const MoviePostContainer = () => {
    const {loading, data, error} = useSelector(state=>state.moviePost.moviePost)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default MoviePostContainer;