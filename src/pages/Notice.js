import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './Notice.scss';

const Notice = () => {
  const [listData, setListData] =useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/notice`)
    .then(res => {
      setListData(res.data);
    })
    .catch(e=>console.log(e));
  },[listData]);


    if(!listData) return <div>로딩중</div> 
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
              {listData.map(text=>
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
          </div>
        </div>
      )
};

export default Notice;