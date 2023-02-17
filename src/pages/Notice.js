import { Pagination } from 'antd';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import { getCookie } from '../util/cookie';
import './Community.scss';


const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}


const Notice = () => {
  const isLogin = useSelector(state => state.loginCheck.isLogin);
  const navigate = useNavigate();
  const onClick = () => {
    if(!isLogin) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }else {
      navigate('/writenotice');
    }
  }

  const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
  const dispatch = useDispatch();


  const textData = async () => {
    const data = await axios.get(`${API_URL}/notice`);
    return data
  }

  useEffect(()=>{
    dispatch(getDatas(textData))
  },[dispatch]);


    if(loading) return <div style={{...mm}}>로딩중입니다..</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    return (
        <div className='everyboard inner'>
          <div className='boardbox'>
            <h2>공지사항</h2>
            <table className='freetable'>
              <thead>
                  <tr className='category'>
                      <th width='45%'>제목</th>
                      <th width='25%'>작성자</th>
                      <th width='20%'>등록일</th>
                  </tr>
              </thead>
              <tbody>
                {data.map(text=>
                  <tr key={text.not_no}>
                    <td>
                      <Link to={`/noticefree/${text.not_no}`}><span>{text.not_title}</span></Link>
                    </td>
                    <td>{text.not_name}</td>
                    <td>{text.not_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className='nav'>
              <Pagination defaultCurrent={1} total={50} dataSource={data} className='pagination'/>
              {getCookie("usernickname") === "admin" ? <div>
                <button onClick={onClick} className='writebtn'>글쓰기</button>
              </div> : null}
              
            </div>
          </div>
        </div>
      )
};

export default Notice;