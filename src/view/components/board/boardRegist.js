import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";
import cookie from 'react-cookies';
import $ from 'jquery';
import Modal from 'react-modal';

const BoardRegist = () => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {

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

            $("#main").show()
        } else {
            $("#main").hide()
        }
        callSessionInfoApi()
    }, []);

    //사용자 아이디 가져오는 코드
    const callSessionInfoApi = () => {
        axios.post('http://localhost:8080/member/jwtChk', {
          token1: cookie.load('userid'),
          token2: cookie.load('username')
        })
        .then(response => {
          setUserId(response.data.token1);
          console.log("mid = "+response.data.token1);
        })
        .catch(error => {
          console.log('작업중 오류가 발생하였습니다.');
        });

    };

    useEffect(() => {
        callSessionInfoApi();
    }, [userId]);

    const submitClick = async (e) => {
        e.preventDefault(); // 기본 동작 방지

        const fnValidate = () => {
            if (title === '') {
                sweetalert('제목을 입력해주세요.', '', 'error', '닫기');
                return false;
            }
            if (content === '') {
                sweetalert('내용을 입력해주세요.', '', 'error', '닫기');
                return false;
            }
            return true;
        }

        if (fnValidate()) {
            const jsonData = {
                bwriter: userId,
                btitle: title,
                bcon: content,
                
            };

            try {
                const response = await axios.post('http://localhost:8080/board/boardRegist', jsonData);
                if (response.data === "succ") {
                    sweetalert('등록되었습니다.', '', 'success', '확인');
                    setTimeout(() => {
                        navigate('/board/boardlist');
                    }, 1500);
                }
            } catch (error) {
                alert('작업 중 오류가 발생하였습니다.');
            }
        }
    };


    const sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
        })
    }

    return (
        <main id="main" style={{display: "none"}}>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 section-t8">
                            <form name="frm" id="frm" role="form" onSubmit={submitClick}>
                                <input type="hidden" id="bwriter" name="bwriter" value={userId} />
                                <div className="row">
                                    <div className="col-md-12 mb-3 d-flex justify-content-between align-items-center">
                                        <h2>자유게시판</h2>
                                        <a href={`/board/boardlist`}>작성 취소</a>
                                    </div>
                                    <div className="form-group">
                                            <input type="text" name="btitle" className="form-control form-control-lg form-control-a"
                                                placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="col-md-12" style={{marginTop:'1%'}}>
                                        <div className="form-group">
                                            <textarea name="bcon" className="form-control" cols="45" rows="8" placeholder="Content"
                                                value={content} onChange={(e) => setContent(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-a">게시글 등록하기</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default BoardRegist;