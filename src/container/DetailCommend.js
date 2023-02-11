import React, { useState } from 'react';
import './DetailCommend.scss';
import { Pagination } from 'antd';
import { BiLike, BiDislike,BiCommentDetail, BiCommentEdit } from "react-icons/bi";
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like } from '../moduls/recoCount';
import { getCookie } from '../util/cookie';

const DetailCommend = () => {
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const likecount = useSelector(state => state.recoCount.getlike);
    const dislikecount = useSelector(state => state.recoCount.getdislike);
    // const istoggle = useSelector(state => state.recoCount.getlike.istoggle);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // textarea 상태관리
    const [textCount, setTextCount] = useState(0);
    const ontextHandeler = (e) => {
        setTextCount(e.target.value.length);
    }
    // 등록하기 버튼 눌렀을 때
    const onClick = () => {
        if(!isLogin) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }
    }
    
    const clickLike = () => {
            dispatch(like());
    }
    const clikeDislike = () => {
        dispatch(dislike());
    }
    return (
        <div className='commendbox'>
            <div className='titlezone'>
                <h3>영화 한줄평 <BiCommentDetail className='icon2'/></h3>
                <nav>
                    <span className='infosp'>
                        ( 위 영화를 추천 / 비추천 하려면 아이콘을 누르세요. )
                    </span>
                    <BiLike className='icon' onClick={clickLike}/> 
                    : <span>{likecount}</span>
                    <BiDislike className='icon' onClick={clikeDislike}/> 
                    : <span>{dislikecount}</span>
                </nav>
            </div>
            <div className='commendzone'>
                <table className='commendtable'>
                    <thead>
                        <tr>
                            <th width='30%'>작성자</th>
                            <th width='70%'>한줄평</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                    </tbody>
                </table>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className='writezone'>
                <h3>한줄평 쓰기 <BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    <div className='write'>
                        <textarea maxLength={50} onChange={ontextHandeler}
                        placeholder='이 영화의 한줄평을 자유롭게 적어주세요.'></textarea>
                        <button onClick={onClick}>등록하기</button>
                    </div>
                    <p>
                        <span className='countsp'>{textCount}</span> 
                        <span>/</span> 
                        <span>50자</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailCommend;