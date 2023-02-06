import React from 'react';
import './Community.scss';

const Community = () => {
    return (
    <table className='table-striped'>
        <thead>
            <h3>자유게시판</h3>
            <tr>
                <th>글번호</th>
                <th>작성자</th>
                <th>제목</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>이창민</td>
            <td>제목</td>
            <td>2020-10-25</td>
          </tr>
          <tr>
            <td>2</td>
            <td>권세영</td>
            <td>제목</td>
            <td>2020-10-25</td>
          </tr>
          <tr>
            <td>3</td>
            <td>남민섭</td>
            <td>제목</td>
            <td>2020-10-25</td>
          </tr>
          <tr>
            <td>4</td>
            <td>김주원</td>
            <td>제목</td>
            <td>2020-10-25</td>
          </tr>
        </tbody>
    </table>
  )
}
      
export default Community;