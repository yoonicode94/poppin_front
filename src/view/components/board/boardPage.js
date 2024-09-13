import { Component } from "react";
import $ from 'jquery';
import axios from "axios";
import {Link} from 'react-router-dom';

class boardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get_bno: props.match.params.bno,
        }
    }
    
    componentDidMount(){
        this.callBoardApi();
    }

    callBoardApi = async () => {
        try{
            await axios.get('http://localhost:8080/board/boardPage/'+this.state.get_bno)
            .then( response => {
                var data = response.data.boardPage[0]
                $('#board_title').text(data.btitle)
                $('#board_con').text(data.bcon)
                $('#board_writer').text('작성자: '+data.bwriter)
                $('#board_date').text('날짜: '+data.bdate)
                $('#board_cnt').text('조회수: '+data.bcnt)
                $('#replycntSmall').text('댓글 수: '+data.bccnt)
            });
            
        } catch(error){
            alert("axios에러");
        }
    }

    render() {
        return (
            <main id="main">
                <section class="intro-single">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-8">
                                <div class="title-single-box">
                                    <h1 class="title-single" id="board_title"> 게시글 제목</h1>
                                    <span class="color-text-a" id="board_writer">작성자: </span>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item" id="board_cnt">
                                            조회수:
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page" id="board_date">
                                            날짜
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="news-single nav-arrow-b">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <div class="post-content color-text-a" id="board_con">
                                    내용
                                </div>
                                <div class="box-footer">
                                    <ul class="mailbox-attachments clearfix uploadedList">
                                    </ul>
                                </div>
                                <div class="post-footer">
                                    <div class="post-share">
                                        <ul class="list-inline socials">

                                            <li>
                                            <Link to={'/board/boardList'}><button class="green-button btn button-text" id="goListBtn">게시판 목록</button></Link>
                                                <button class="green-button btn button-text" type="submit" id="modifyBtn">게시글 수정</button>
                                                <button class="green-button2 btn button-text" type="submit" id="removeBtn">게시글 삭제</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <form role="form" action="modifyPage" method="post">
                                        <input type='hidden' name='bno' value="${boardVO.bno}"/> 
                                        <input type='hidden' name='page' value="${cri.page}"/> 
                                        <input type='hidden' name='perPageNum' value="${cri.perPageNum}"/>
                                        <input type='hidden' name='searchType' value="${cri.searchType}"/>
                                        <input type='hidden' name='keyword' value="${cri.keyword}"/>
                                    </form>
                                    </div>
                                </div>
                                            <div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="box box-success">
                                                            <div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                                                                <div class="title-box-d">
                                                                    <h3 class="title-d">댓글</h3>
                                                                </div>
                                                            </div>

                                                            <ul class="timeline">
                                                                <li class="time-label" id="repliesDiv">
                                                                    <strong>댓글목록</strong> <small id='replycntSmall'> 댓글 수 </small>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div id="modifyModal" class="modal modal-primary fade" role="dialog">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title"></h4>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div class="modal-body" data-cno>
                                                        <p><input type="text" id="replytext" class="form-control"/></p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" id="replyModBtn" data-dismiss="modal">수정</button>
                                                        <button type="button" class="btn btn-danger" id="replyDelBtn" data-dismiss="modal">삭제</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </main>
        );
    }
}
export default boardPage;