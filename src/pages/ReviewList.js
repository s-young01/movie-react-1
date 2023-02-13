import React from 'react';
import { API_URL } from '../config/apiurl';
import './ReviewList.scss';

const ReviewList = ({list}) => {
    return (
        <div className='reviewlist'>
                <div className='reviewbox'>
                    <div className='imgbox'>
                        <img src={`${API_URL}/${list.r_img}`} alt=''/>
                    </div>
                    <div className='reviewtext'>
                        <div className='rev_title'>
                            <nav className='titlesp'>
                                <span>{list.r_title}</span>
                            </nav>
                            <nav className='rev_writen'>
                                <span>작성자</span>
                                <span>:</span>
                                <span>{list.r_nickname}</span>
                            </nav>
                        </div>
                        <div className='rev_desc'>
                            <p>{list.r_desc}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewList;