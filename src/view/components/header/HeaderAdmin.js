import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                    <a class="navbar-brand text-brand" href="/board/home">Pop<span class="color-b">Pin</span></a>

                    <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a id="home" class="nav-link" href="/">홈</a>
                            </li>

                            <li class="nav-item">
                                <a id="product" class="nav-link" href="/goodslist">상품</a>
                            </li>

                            <li class="nav-item">
                                <a id="popupstore" class="nav-link" href="/popup/popuplist">팝업스토어</a>
                            </li>

                            <li class="nav-item">
                                <a id="board" class="nav-link" href="/boardlist">게시판</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link " href="/login">로그인</a>
                            </li>

                            {/*
                        <u:isLogin>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item " href="/member/logout">로그아웃</a>
                                    <a class="dropdown-item " href="#">예약정보</a>
                                    <a class="dropdown-item " href="#">장바구니</a>
                                    <a class="dropdown-item " href="#">주문정보</a>
                                    <a class="dropdown-item " href="/member/memberInfo">회원정보</a>
                                </div>
                            </li>
                        </u:isLogin>
                            */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;