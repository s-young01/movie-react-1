import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getData } from '../moduls/moviePost';
import { getCookie } from '../util/cookie';
import './DetailView.scss';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
  }

const NoticeDetailView = () => {
    const {no} = useParams();
    console.log(no)
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    const listbt = () => {
        navigate("/notice")
    }
    const {loading, data, error} = useSelector(state => state.moviePost.moviePost);
    const dispatch = useDispatch();

    const textData = async () => {
        const data = await axios.get(`${API_URL}/notice/${no}`);
        return data;
    }

    useEffect(() => {
        dispatch(getData(textData))
    }, [dispatch, no])
    console.log(data)
    if(loading) return <div style={{...mm}}>로딩중입니다..</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    return (
            <div className="inner detailtext">
                <div className='detailtextbox'>
                    <div className='detailTitle'>
                        <h2>{data.not_title}</h2>
                        <div>
                            <nav>
                                <span>작성자</span>
                                <span>:</span>
                                <span>{data.not_name}</span>
                            </nav>
                        </div>
                    </div>
                    <div className='textzone'>
                        {data.not_desc}
                    </div>
                    <div className='btn'>
                        {  getCookie("usernickname") === "admin" ?
                           <>
                            <button className='btn1'><Link to={`/editNotice/${no}/${data.not_title}/${data.not_name}/${data.not_desc}/${data.not_date}`}>수정</Link></button>
                            <button className='btn2' onClick={ () =>{
                                axios.delete(`${API_URL}/deleteNotice/${no}`)
                                .then(res=>{
                                    console.log(res)
                                    if(res){
                                        alert("삭제완료")
                                        navigate("/notice")
                                    }
                                })
                                .catch(e=>console.log(e))
                            }}>삭제</button>
                            <button className='btn2' onClick={listbt}>목록</button></> : <button className='btn2' onClick={listbt}>목록</button>
                        }
                    </div>    
                </div>
            </div>
    )
}

export default NoticeDetailView;