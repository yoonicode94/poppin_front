import { Component } from "react"

class boardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <main id="main">
                <section class="content">
                    <div class="row">
                        <section class="intro-single">
                            <div class="container">
                                <div class="row">

                                    <div class="col-md-12 col-lg-8">
                                        <div class="title-single-box">
                                            <h1 class="title-single">자유게시판</h1>
                                            <span class="color-text-a">자유롭게 대화해보세요!</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4">
                                        <nav aria-label="breadcrumb"
                                            class="breadcrumb-box d-flex justify-content-lg-end">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="#">홈</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">
                                                    자유게시판</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="community-grid grid">
                            <div class="container">
                                <div class="list-box">
                                    <div class="box-header with-border">
                                        <div class="row">
                                            <div class="search-box">
                                                <select name="searchType">
                                                    <option value="n">
                                                        ---</option>
                                                    <option value="t">
                                                        제목</option>
                                                    <option value="w">
                                                        작성자</option>
                                                    <option value="tw">
                                                        제목 / 작성자</option>
                                                </select> <input type="text" name='keyword' id="keywordInput"
                                                    value='${cri.keyword }' /> <a href="#" id="searchBtn">검색</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="box-body">
                                        <div class="board-main">
                                            <table class="table table-bordered">
                                                <tr>
                                                    <th class="short">글번호</th>
                                                    <th>제목</th>
                                                    <th class="middle">작성자</th>
                                                    <th class="long">작성일</th>
                                                    <th class="short">조회수</th>
                                                </tr>
                                                    <tr>
                                                        <td>게시글 번호</td>
                                                        <td class="title-align"><a
                                                            href='/boardPage'>
                                                            제목 <strong>(댓글 수)</strong>
                                                        </a></td>
                                                        <td>작성자</td>
                                                        <td>작성 날짜</td>
                                                        <td><strong>조회수</strong></td>
                                                    </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-footer">
                                    <div class="list-registBtn">
                                        <button class="green-button btn button-text" id="list-registBtn">
                                            <strong>작성하기</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>
            </main>
        );
    }
}
export default boardList;