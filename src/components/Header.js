import React, { useEffect, useState } from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';
import { setLogin, setLogout } from '../moduls/loginCheck';


const selectStyle = {
    border: 0,
    backgroundColor: "#334756",
    color: "#fff",
    outline: 0,
    fontSize: "18px"
}

const Header = () => {
    const isLogin = useSelector(state=>state.loginCheck.isLogin);
    //console.log(isLogin)
    const username = getCookie('usernickname');
    const dispatch = useDispatch();
    const logoutClick = () =>{
        removeCookie('usernickname');
        removeCookie('userid');
        dispatch(setLogout())
        alert("로그아웃")
    }
    useEffect(()=>{
        if(username) {
            dispatch(setLogin())
        }
    })
    const [isSearch, setSearch] = useState({
        colume: "mov_title",
        search: ""
    })

    const onChange = (e) => {
       const {name, value} = e.target
       setSearch({
        ...isSearch,
        [name]: value
       })
    }
    
    
    const addSearch = () => {
        if(isSearch !== "" && isSearch !== undefined) {
            setSearch({
                ...isSearch,
                colume: "mov_title",
                search: ""
            })
        }else {
            alert("검색어를 입력해주세요")
        }
    }

    return (
        <header>
            <Navi/>
            <h1><Link to='/'>LOGO</Link></h1>
            <div id='search'>
                <div className='searchbox'>
                    <select name="colume" style={{...selectStyle}} value={isSearch.colume} onChange={onChange}>
                        <option value="mov_title">영화명</option>
                        <option value="mov_genre">장르</option>
                    </select>
                    <input name='search' value={isSearch.search} placeholder='Search...' onChange={onChange}/>
                    <button onClick={addSearch}>
                        <Link to={`/searchpage/${isSearch.colume}/${isSearch.search}`}>
                            <CgSearch className='searchicon'/>
                        </Link>
                    </button>
                </div>
            </div>
            <div id='headermenu'>
                <ul className='membermenu'>
                    <li><Link to='/'>HOME</Link></li>
                    <span>|</span>
                    {isLogin ? <><li onClick={logoutClick}>로그아웃</li>
                    <span>|</span>
                    <li>마이페이지</li></> :
                    <><li><Link to='/login'>로그인</Link></li>
                    <span>|</span>
                    <li><Link to='/join'>회원가입</Link></li></>}
                </ul>
            </div>
        </header>
    );
};

export default Header;