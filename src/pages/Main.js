import React from 'react';
import './Main.scss';
import Latest from './Latest';
import Recomend from './Recomend';
import NewMovie from './NewMovie';
import SubBoard from './SubBoard';
import DetailView from './DetailView';

const Main = () => {
    return (
        <div className='main' >
            <NewMovie/>
            <Latest/>
            <Recomend/>
            <SubBoard/> 
            <DetailView/>   
        </div>
    );
};

export default Main;