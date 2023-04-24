import axios from 'axios';
import React, { useState } from 'react';
import { BiLike, BiCommentDetail } from "react-icons/bi";
import {  useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import { useNavigate } from 'react-router-dom';

const RecoCount = ({movno, data, reDispatch}) => {
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    console.log(data);
    const userid = getCookie('userid');
    console.log(userid);
    const [formData, setFormData] = useState({
        reco_count: data.reco_count,
        reco_usreid: userid,
        reco_movno: movno
    })
    const onSubmit = () => {
        if(isLogin === true) {
            axios.post(`${API_URL}/counterUpdate`,formData).then(res=>{
                if(res.data === 'no') {
                    alert('이미 추천하였습니다.');
                    reDispatch();
                }
                if(res.data === 'ok') {
                    alert('추천되었습니다.');
                    reDispatch();
                }
                console.log(res);
            }).catch(e=>{
                console.log(e);
            })
        }else {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }    
    }
    return (
        <div className='titlezone'>
            <h3>영화 한줄평 <BiCommentDetail className='icon2'/></h3>
            <nav>
                <span className='infosp'>( 이 영화를 추천 하려면 아이콘을 누르세요 )</span>
                <BiLike className='icon' onClick={onSubmit}/> : <span>{formData.reco_count}</span>
            </nav>
        </div>
    );
};

export default RecoCount;