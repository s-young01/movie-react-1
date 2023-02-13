import React from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Community.scss';

const Community = ({textlist}) => {
  const isLogin = useSelector(state => state.loginCheck.isLogin);
  console.log(useParams(textlist))
  const navigate = useNavigate();
  const onClick = () => {
    if(!isLogin) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }else {
      navigate('/write');
    }
  }
  return (
    <div className='everyboard inner'>
      <div className='boardbox'>
        <h2>자유게시판</h2>
          <table className='freetable'>
            <thead>
                <tr className='category'>
                    <th width='10%'>번호</th>
                    <th width='45%'>제목</th>
                    <th width='25%'>작성자</th>
                    <th width='20%'>등록일</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                <Link to='/detailfree'><span>제목입니다</span></Link>
                </td>
                <td>이창민</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                <Link to='/detailfree'><span>제목입니다</span></Link>
                </td>
                <td>권세영</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link to='/detailfree'><span>제목입니다</span></Link>
                </td>
                <td>남민섭</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                <Link to='/detailfree'><span>제목입니다</span></Link>
                </td>
                <td>김주원</td>
                <td>2023-02-06</td>
              </tr>
            </tbody>
        </table>
        <div className='nav'>
            <Pagination defaultCurrent={1} total={50} className='pagination'/>
            <div>
              <button onClick={onClick} className='writebtn'>글쓰기</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Community;