import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import { useDispatch ,useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import './Community.scss';
import { Pagination } from 'antd';

const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}

const Community = () => {
  const isLogin = useSelector(state => state.loginCheck.isLogin);
  const navigate = useNavigate();
  const onClick = () => {
    if(!isLogin) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }else {
      navigate('/write');
    }
  }
  const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
  const dispatch = useDispatch();

  const textData = async () => {
    const data = await axios.get(`${API_URL}/textFree`);
    return data
  }


  useEffect(() => {
    dispatch(getDatas(textData))
  }, [dispatch])

  
  if(loading) return <div style={{...mm}}>로딩중입니다..</div>
  if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
  if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
  console.log(data[0])
  return (
    <div className='everyboard inner'>
      <div className='boardbox'>
        <h2>자유게시판</h2>
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
              <tr key={text.bor_no}>
                <td>
                  <Link to={`/detailfree/${text.bor_no}`}><span>{text.bor_title}</span></Link>
                </td>
                <td>{text.bor_name}</td>
                <td>{text.bor_date}</td>
              </tr>
              )}
            </tbody>
        </table>
        <div className='nav'>
            <Pagination defaultCurrent={1} total={50} dataSource={data} className='pagination'/>
            <div>
              <button onClick={onClick} className='writebtn'>글쓰기</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Community;