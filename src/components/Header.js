import React from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <li><Link to='login'>로그인</Link></li>
                    <span>|</span>
                    <li><Link to='join'>회원가입</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;