import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import cookie from 'react-cookies';

//import '../../../resources/assets/css/style.css';
//import '../../../resources/bootstrap/css/bootstrap.min.css';
import '../../../resources/dist/css/AdminLTE.min.css';

class login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitClick = (e) => {

        this.mid_val = $('#userid').val();
        this.mpw_val = $('#password').val();

        if (this.mid_val === '' || this.mpw_val === '') {
            alert('이메일과 비밀번호를 확인해주세요.');
        } else {
            axios.post('http://localhost:8080/member/login', {
                mid: this.mid_val,
                mpw: this.mpw_val
            })
                .then(response => {
                    var userid = response.data.login[0].mid
                    var username = response.data.login[0].mname
                    var upw = response.data.login[0].mpw

                    if (userid !== null && userid !== '') {
                        const expires = new Date()
                        expires.setMinutes(expires.getMinutes() + 60)

                        axios.post('http://localhost:8080/member/jwt', {
                            mid: userid,
                            mname: username
                        })
                            .then(response => {
                                cookie.save('userid', response.data.token1
                                    , { path: '/', expires })
                                cookie.save('username', response.data.token2
                                    , { path: '/', expires })
                                cookie.save('userpassword', upw
                                    , { path: '/', expires })

                                alert("로그인 되었습니다.");
                                window.location.href = "/";
                            })
                            .catch(error => {
                                alert('작업중 오류가 발생하였습니다.');
                            });
                    } else {
                        alert('이메일과 비밀번호를 확인해주세요.');
                    }
                })
                .catch(error => { alert('이메일과 비밀번호를 확인해주세요.'); });
        }
    }

    enterKey = (e) => {
        if (e.key === 'Enter') {
            this.submitClick();
        }
    };

    render() {
        return (
            <>
                <div class="login-box">
                    <div class="login-logo">
                        <a href="/" style={{ fontWeight: "600" }}><b>Pop<span class="color-b">Pin</span></b></a>
                    </div>
                    <div class="login-box-body">
                        <p class="login-box-msg"><b>로그인하여 시작하세요.</b></p>

                        <div style={{ marginBottom: "3%" }} class="form-group has-feedback">
                            <input id="userid" type="text" name="mid" class="form-control"
                                placeholder="ID" onKeyDown={this.enterKey} />
                        </div>
                        <div style={{ marginBottom: "3%" }} class="form-group has-feedback">
                            <input id="password" type="password" name="mpw" class="form-control"
                                placeholder="PASSWORD" onKeyDown={this.enterKey} />
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <div id="logchkBtn" style={{ backgroundColor: "#2eca6a", borderColor: "#2eca6a" }} class="btn btn-primary btn-block btn-flat" onClick={(e) => this.submitClick(e)}>로그인</div>
                            </div>
                        </div>

                        <p class="ptag">처음 이용하시면 회원가입을 해주세요.</p>
                        <Link to={"/join"} class="atag" style={{ textDecoration: "none" }}>회원가입</Link>

                    </div>

                </div >
            </>
        );
    }

}

export default login;