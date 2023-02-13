import React from 'react';
import './SubBoard.scss';



const SubBoard = () => {
    return (
        <div className='sboard inner'>
            <div className='box'>
                <h3>자유</h3>
                <ul>
                    <li>설명</li>
                    <li>설명</li>
                    <li>설명</li>
                </ul>
            </div>
            <div className='box'>
                <h3>영화리뷰</h3>
                <ul>
                    <a href='/'>                   
                        <li>1</li>
                    </a> 
                    <a href='/'>                   
                        <li>2</li>
                    </a> 
                    <a href='/'>                   
                        <li>3</li>
                    </a> 
                </ul>
            </div>
            <div className='box'>
                <h3>공지사항</h3>
                <ul>
                    <a href='/'>                   
                        <li>1</li>
                    </a>
                    <a href='/'>                   
                        <li>2</li>
                    </a>
                    <a href='/'>                   
                        <li>3</li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default SubBoard;