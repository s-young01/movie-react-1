import React from 'react';
import './Community.scss';

const Community = () => {
    return (
      <div className='community'>
        <h2>자유게시판</h2>
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
                <td>1</td>
                <td>제목입니다</td>
                <td>이창민</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>2</td>
                <td>제목입니다</td>
                <td>권세영</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>3</td>
                <td>제목입니다</td>
                <td>남민섭</td>
                <td>2023-02-06</td>
              </tr>
              <tr>
                <td>4</td>
                <td>제목입니다</td>
                <td>김주원</td>
                <td>2023-02-06</td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}
      
export default Community;