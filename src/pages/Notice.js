import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getDatas, getNotices } from '../moduls/moviePost';
import { getCookie } from '../util/cookie';
import './Community.scss';
import Pagination from '../components/Pagination';


const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}


const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5); //한페이지당 렌더링 되는 데이터 수

   //페이지숫자 리스트 구현 계산
   const indexOfLast = currentPage * postsPerPage    //페이지 마지막수 1 * 10
   const indexOfFirst = indexOfLast - postsPerPage;   // 페이지 첫번째 수10 - 10 = 0

   const currentPosts = (data) => {
    let currentPosts = data.slice(indexOfFirst, indexOfLast)  //데이터를 0~10번째까지 슬라이스함
    return currentPosts;
}

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

  const {loading, data, error} = useSelector(state => state.moviePost.noticePosts);
  const dispatch = useDispatch();


  const textData = async () => {
    const data = await axios.get(`${API_URL}/notice`);
    return data
  }

  useEffect(()=>{
    dispatch(getNotices(textData))
  },[dispatch]);


    if(loading) return <div style={{...mm}}>로딩중입니다..</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    const postLists = currentPosts(data) //위 조건문 통과 후에 페이징 슬라이스
    return (
        <div className='everyboard inner'>
          <div className='boardbox'>
            <h2>공지사항</h2>
            <div className='nav'>
              {getCookie("usernickname") === "admin" ? <div>
                <button onClick={onClick} className='writebtn'>글쓰기</button>
              </div> : null}
            </div>
            <table className='freetable'>
              <thead>
                  <tr className='category'>
                      <th width='45%'>제목</th>
                      <th width='25%'>작성자</th>
                      <th width='20%'>등록일</th>
                  </tr>
              </thead>
              <tbody>
                {postLists.map(text=>
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
            <Pagination className="pagination"
              postsPerPage={postsPerPage}
              totalPosts={data.length}
              paginate={setCurrentPage}
              isDone={false}
              currentPage={currentPage}
            />
          </div>
        </div>
      )
};

export default Notice;