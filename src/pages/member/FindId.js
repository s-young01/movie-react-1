import React from 'react';
import "./FindId.scss"


const FindId = () => {
    return (
        <div className='inner outline'>
            <div className='findid'>
                <h2>아이디 찾기</h2>
                <form className='enter'>
                    <table>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td><input name="username"></input></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input name="email"></input></td>
                            </tr>
                            <tr>
                                <td colSpan={2}className='subtn'>
                                    <button type="submit">확인</button>
                                    <button >취소</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default FindId;