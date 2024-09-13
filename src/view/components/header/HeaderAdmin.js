import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import cookie from 'react-cookies';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernm: '',
            active: ''
        }
    }

    componentDidMount() {

        if (
            window.location.pathname.includes("/login") ||
            window.location.pathname.includes("/join")
        ) {
            $(".fixed-top").hide()
        }

        if (sessionStorage.getItem("sessionLogin") != undefined) {
            this.userInfo = sessionStorage.getItem("sessionLogin")
            axios.post("http://localhost:8080/member/sessionJwtLogin", {
                sessionLogin: this.userInfo
            })
                .then(response => {
                    var memberInfo = JSON.parse(response.data.userInfo);
                    alert(memberInfo);
                    this.setState({ usernm: memberInfo.login[0].mid });
                }).catch(error => {
                    alert("작업중 오류가 발생하였습니다.");
                });

            $("#notLogin").hide()
            $("#isLogin").show()
        } else {
            $("#notLogin").show()
            $("#isLogin").hide()
        }

        var cookie_userid = cookie.load('userid')
        var cookie_usernm = cookie.load('username')
        var cookie_password = cookie.load('userpassword')

        if (cookie_userid != undefined) {
            const expires = new Date()
            expires.setMinutes(expires.getMinutes() + 60)

            cookie.save('userid', cookie_userid
                , { path: '/', expires })
            cookie.save('username', cookie_usernm
                , { path: '/', expires })
            cookie.save('userpassword', cookie_password
                , { path: '/', expires })

            $("#notLogin").hide()
            $("#isLogin").show()
        }
        this.callSessionInfoApi()
    }

    callSessionInfoApi = (e) => {
        axios.post('http://localhost:8080/member/jwtChk', {
            token1: cookie.load('userid')
            , token2: cookie.load('username')
        })
            .then(response => {
                this.setState({ usernm: response.data.token2 })
            })
            .catch(error => {
                console.log('작업중 오류가 발생하였습니다.');
            });
    }

    handleMenuClick = (path) => {
        this.setState({ active: path });
    };

    logout = async e => {
        sessionStorage.removeItem("sessionLogin");
        cookie.remove('userid', { path: '/' });
        cookie.remove('username', { path: '/' });
        cookie.remove('userpassword', { path: '/' });
        window.location.href = "/";
    }

    render() {
        return (
            <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div class="container">
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a class="navbar-brand text-brand" href="/">Pop<span class="color-b">Pin</span></a>

                    <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul class="navbar-nav">
                            <li class={`nav-item ${window.location.pathname === '/' ? 'active' : ''}`}>
                                <a id="home" class="nav-link" href="/" onClick={() => this.handleMenuClick('/')}>홈</a>
                            </li>

                            <li class={`nav-item ${window.location.pathname === '/goodslist' ? 'active' : ''}`}>
                                <a id="product" class="nav-link" href="/goodslist" onClick={() => this.handleMenuClick('/goodslist')}>상품</a>
                            </li>

<<<<<<< HEAD
                            <li class={`nav-item ${window.location.pathname === '/popup/popuplist' ? 'active' : ''}`}>
                                <a id="popupstore" class="nav-link" href="/popup/popuplist" onClick={() => this.handleMenuClick('/popup/popuplist')}>팝업스토어</a>
                            </li>

                            <li class={`nav-item ${window.location.pathname === '/boardlist' ? 'active' : ''}`}>
                                <a id="board" class="nav-link" href="/boardlist" onClick={() => this.handleMenuClick('/boardlist')}>게시판</a>
=======
                            <li class="nav-item">
                                <a id="popupstore" class="nav-link" href="/popup/popupList">팝업스토어</a>
                            </li>

                            <li class="nav-item">
                                <a id="board" class="nav-link" href="/board/boardlist">게시판</a>
>>>>>>> c14ca67966908634dff95c8286db2ed8e4828d3b
                            </li>

                            <li class="nav-item">
                                <p><span>'{this.state.usernm}'</span>님 반갑습니다.</p>
                            </li>

                            <div id="notLogin">
                                <li class={`nav-item ${window.location.pathname === '/login' ? 'active' : ''}`}>
                                    <a class="nav-link " href="/login" onClick={() => this.handleMenuClick('/login')}>로그인</a>
                                </li>
                            </div>


                            <div id="isLogin">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item " href="/" onClick={this.logout}>로그아웃</a>
                                        <a class="dropdown-item " href="#">예약정보</a>
                                        <a class="dropdown-item " href="#">장바구니</a>
                                        <a class="dropdown-item " href="#">주문정보</a>
                                        <a class="dropdown-item " href="/member/memberinfo">회원정보</a>
                                    </div>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;