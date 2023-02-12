import React, { useEffect } from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';
import { setLogin, setLogout } from '../moduls/loginCheck';

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
    
    return (
        <header>
            <Navi/>
            <h1><Link to='/'>LOGO</Link></h1>
            <div id='search'>
                <div className='searchbox'>
                    <input name='search' placeholder='Search...'/>
                    <button>
                        <CgSearch className='searchicon'/>
                    </button>
                </div>
            </div>
            <div id='headermenu'>
                <ul className='membermenu'>
                    <li><Link to='/'>HOME</Link></li>
                    <span>|</span>
                    {isLogin ? <><li onClick={logoutClick}>로그아웃</li>
                    <span>|</span>
                    <li>마이페이지</li>
                    {username === 'tpdud01' ? 
                    <><span>|</span>
                    <li><Link to='/movieupdate'>영화등록</Link></li></> : null}</> :
                    <><li><Link to='/login'>로그인</Link></li>
                    <span>|</span>
                    <li><Link to='/join'>회원가입</Link></li></>}
                    
                </ul>
            </div>
        </header>
    );
};

export default Header;