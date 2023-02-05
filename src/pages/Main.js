import React from 'react';
import './Main.scss';
import Latest from './Latest';
import Recomend from './Recomend';
import NewMovie from './NewMovie';
import MoviePostContainer from '../container/MoviePostContainer';


    
   /*  const hidden = () => {
        style: {display: {sct} == 600 ? "none": "block"}
    } */

const Main = () => {
    return (
        <div className='main' >
            <NewMovie/>
            <Latest/>
            <MoviePostContainer/>
            <Recomend/>    
        </div>
    );
};

export default Main;