import React from 'react';
import { API_URL } from '../../config/apiurl';

const MovieDetail = ({data}) => {
    return (
        <div>
            <div>
                <div>
                    <h3>{data.mov_title}</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <img src={`${API_URL}/${data.mov_img}`} alt=''/>
                </div>
            </div>
            <div>
                <div>
                    <p></p>
                </div>
                <div>
                    영상
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;