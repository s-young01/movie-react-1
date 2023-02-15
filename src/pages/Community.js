import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import { useDispatch ,useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import './Community.scss';
import Pagination from '../components/Pagination';


const mm = {
  margin: "300px",
  marginLeft: "800px",
  color: "#fff"
}

const Community = () => {
  const [posts, setPosts] = useState([]); //초기 받아오는 데이터 설정 초기값은 []
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5); //한페이지당 렌더링 되는 데이터 수

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
  
  //console.log(data)
   //페이지숫자 리스트 구현 계산
   const indexOfLast = currentPage * postsPerPage    //페이지 마지막수 1 * 10
   const indexOfFirst = indexOfLast - postsPerPage;   // 페이지 첫번째 수10 - 10 = 0
   let currentPosts2;
   const currentPosts =  (posts) => {
     console.log(indexOfLast)
     console.log(indexOfFirst)
     console.log("포스트 불러옴")
     console.log(posts)
     currentPosts2 = posts.slice(indexOfFirst, indexOfLast)  //데이터를 0~10번째까지 슬라이스함
     console.log("배열 원하는 만큼 자름")
     console.log(currentPosts2) 
     return currentPosts2;
   }
   const postLists = currentPosts(posts)
   console.log(postLists)

   const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
  const dispatch = useDispatch();

  const textData = async () => {
    const data = await axios.get(`${API_URL}/textFree`);
    return data
  }

   useEffect(() => {
    dispatch(getDatas(textData))
    setPosts(data)
  }, [dispatch])
  if(loading) return <div style={{...mm}}>로딩중입니다..</div>
  if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
  if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
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
              {postLists.map(text=>
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
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
            />
            <div>
              <button onClick={onClick} className='writebtn'>글쓰기</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Community;