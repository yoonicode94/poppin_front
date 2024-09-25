import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import cookie from 'react-cookies';

const BoardRegist = () => {

    const [username, setUserName] = useState('');

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

    const callSessionInfoApi = () => {
        axios.post('http://localhost:8080/member/jwtChk', {
            token1: cookie.load('userid')
            , token2: cookie.load('username')
        })
            .then(response => {
                setUserName(response.data.token2);
            })
            .catch(error => {
                console.log('작업중 오류가 발생하였습니다.');
            });
    }

    const submitClick = () => {

    };

    return(
        <main id="main" style={{display: "none"}}>
            <section class="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 section-t8">
                            <div class="row">
                                <form id="listregister" role="form" encType="multipart/form-data" method="post">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <div>
                                                <h2>자유게시판</h2>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="btitle"
                                                    class="form-control form-control-lg form-control-a"
                                                    placeholder="Title" required />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="bcon" class="form-control" cols="45" rows="8"
                                                    placeholder="Content" required></textarea>
                                            </div>
                                            {/* <input type="hidden" name="mno" value="${login.mno}" />
                                            <input type="hidden" name="bwriter" value="${login.mid}" /> */}
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class = "form-control"name="bwriter" /* value="${login.mid}" */ placeholder="작성자"/>
                                        </div>
                                        <div class="form-group">
                                            <h3>파일 첨부</h3>
                                            <label htmlFor='imageSelect' className="btn_file">파일선택</label>
                                            <input type="text" id="imagefile" className="fileName fileName1"
                                                readOnly="readonly" placeholder="선택된 파일 없음" />
                                            <input type="file" id="imageSelect" className="uploadBtn uploadBtn1"
                                            /* onChange={e => handleFileInput('file', e)} */ multiple />
                                            <button type="button" className='bt_ty2' style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}
                                            /* onClick={handleRemoveAllThumbnails} */>X</button>
                                            <ul id="upload_img">
                                            </ul>
                                        </div>
                                        <div class="form-group">
                                            
                                        </div>

                                        <div class="col-md-12 text-center">
                                            <button type="submit" class="btn btn-a">게시글 등록하기</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default BoardRegist;