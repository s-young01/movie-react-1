import React from 'react';
import "./Pagination.scss"




const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = []  //페이지 넘버 배열 설정
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div className='pages'>
      <div className='page '>
        <ul className='numberLists'>
          {pageNumbers.map((number) =>
          <li key={number} className="numberList">
            <span className='number' onClick={()=>{
              paginate(number)
              console.log(number)
              }}>{number}</span>
            </li> )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;