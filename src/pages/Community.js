import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Community.scss';

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
  return (
    <div className='everyboard'>
      <div>
        <h2>자유게시판</h2>
      </div>
      <hr/>
      <table className='freetable'>
        <thead>
            <tr className='category'>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='one'>1</td>
            <td className='two'><Link to='/detailfree'>제목입니다</Link></td>
            <td className='three'>이창민</td>
            <td className='four'>2023-02-06</td>
          </tr>
          <tr>
            <td className='one'>2</td>
            <td className='two'><Link to='/detailfree'>제목입니다</Link></td>
            <td className='three'>권세영</td>
            <td className='four'>2023-02-06</td>
          </tr>
          <tr>
            <td className='one'>3</td>
            <td className='two'><Link to='/detailfree'>제목입니다</Link></td>
            <td className='three'>남민섭</td>
            <td className='four'>2023-02-06</td>
          </tr>
          <tr>
            <td className='one'>4</td>
            <td className='two'><Link to='/detailfree'>제목입니다</Link></td>
            <td className='three'>김주원</td>
            <td className='four'>2023-02-06</td>
          </tr>
          <div className='btn'>
            <button onClick={onClick}>글쓰기</button>
          </div>
        </tbody>
      </table>
    </div>
  )
}

export default Community;