import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import cookie from 'react-cookies';

const Header = () => {
  const [usernm, setUsernm] = useState('');
  const [active, setActive] = useState('');

  useEffect(() => {
    if (
      window.location.pathname.includes("/login") ||
      window.location.pathname.includes("/join")
    ) {
      $(".fixed-top").hide();
    }

    const cookie_userid = cookie.load('userid');
    const cookie_usernm = cookie.load('username');
    const cookie_password = cookie.load('userpassword');

    if (cookie_userid !== undefined) {
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 60);

      cookie.save('userid', cookie_userid, { path: '/', expires });
      cookie.save('username', cookie_usernm, { path: '/', expires });
      cookie.save('userpassword', cookie_password, { path: '/', expires });

      $("#notLogin").hide();
      $("#isLogin").show();
    }
    
    callSessionInfoApi();
  }, []);

  const callSessionInfoApi = () => {
    axios.post('http://localhost:8080/member/jwtChk', {
      token1: cookie.load('userid'),
      token2: cookie.load('username')
    })
    .then(response => {
      setUsernm(response.data.token2);
    })
    .catch(error => {
      console.log('작업중 오류가 발생하였습니다.');
    });
  };

  const handleMenuClick = (path) => {
    setActive(path);
  };

  const logout = () => {
    sessionStorage.removeItem("sessionLogin");
    cookie.remove('userid', { path: '/' });
    cookie.remove('username', { path: '/' });
    cookie.remove('userpassword', { path: '/' });
    window.location.href = "/";

  };

  return (
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a className="navbar-brand text-brand" href="/">Pop<span className="color-b">Pin</span></a>

        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
          <ul className="navbar-nav">
            <li className={`nav-item ${window.location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/" onClick={() => handleMenuClick('/')}>홈</Link>
            </li>

            <li className={`nav-item ${window.location.pathname === '/goodslist' ? 'active' : ''}`}>
              <Link className="nav-link" to="/goodslist" onClick={() => handleMenuClick('/goodslist')}>상품</Link>
            </li>

            <li className={`nav-item ${window.location.pathname === '/popup/popuplist' ? 'active' : ''}`}>
              <Link className="nav-link" to="/popup/popuplist" onClick={() => handleMenuClick('/popup/popuplist')}>팝업스토어</Link>
            </li>

            <li className={`nav-item ${window.location.pathname === '/board/boardlist' ? 'active' : ''}`}>
              <Link className="nav-link" to="/board/boardlist" onClick={() => handleMenuClick('/board/boardlist')}>게시판</Link>
            </li>

            <li className="nav-item">
              <p><span>'{usernm}'</span>님 반갑습니다.</p>
            </li>

            <div id="notLogin">
              <li className={`nav-item ${window.location.pathname === '/login' ? 'active' : ''}`}>
                <Link className="nav-link" to="/login" onClick={() => handleMenuClick('/login')}>로그인</Link>
              </li>
            </div>

            <div id="isLogin">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/" onClick={logout}>로그아웃</Link>
                  <Link className="dropdown-item" to="#">예약정보</Link>
                  <Link className="dropdown-item" to="#">장바구니</Link>
                  <Link className="dropdown-item" to="#">주문정보</Link>
                  <Link className="dropdown-item" to="/member/memberinfo">회원정보</Link>
                </div>
              </li>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;