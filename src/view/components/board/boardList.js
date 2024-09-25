import axios from "axios";
import { Component } from "react"
import { Link } from "react-router-dom";

class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseBoardList: [],  // 전체 게시글 목록
            filteredBoardList: [],  // 필터링된 게시글 목록
            searchType: 'n',        // 기본 검색 타입 (n: 전체)
            keyword: ''             // 검색 키워드
        };
    }

    componentDidMount() {
        //this.callBoardAPI();
    }

    callBoardAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8080/board/boardList');
            this.setState({ 
                responseBoardList: response.data.boardList,
                filteredBoardList: response.data.boardList // 초기화
            });
        } catch (error) {
            alert('오류: ' + error);
        }
    }

    handleSearch = () => {
        const { responseBoardList, searchType, keyword } = this.state;
        let filteredBoardList = responseBoardList;

        if (keyword) {
            filteredBoardList = responseBoardList.filter(board => {
                switch (searchType) {
                    case 't': // 제목 검색
                        return board.btitle.toLowerCase().includes(keyword.toLowerCase());
                        //toLowerCase()는 문자열을 모두 소문자로 변환.
                        //includes(keyword.toLowerCase())는 변환된 문자열에 소문자로 변환된 키워드가 포함되어 있는지를 검사.
                        //즉, 문자열이 대소문자를 무시하고 키워드를 포함하고 있는지 확인
                    case 'w': // 작성자 검색
                        return board.bwriter.toLowerCase().includes(keyword.toLowerCase());
                    case 'tw': // 제목/작성자 검색
                        return board.btitle.toLowerCase().includes(keyword.toLowerCase()) ||
                               board.bwriter.toLowerCase().includes(keyword.toLowerCase());
                    default:
                        return true;
                }
            });
        }

        this.setState({ filteredBoardList });
    }

    handleSearchTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
        //event.target: 이벤트가 발생한 요소(즉, 이벤트가 직접적으로 발생한 HTML 요소)를 참조하는 속성입니다.
    }

    handleKeywordChange = (event) => {
        this.setState({ keyword: event.target.value });
    }

    FloatBoardAppend = () => {
        const { filteredBoardList } = this.state;
        if (!filteredBoardList || filteredBoardList.length === 0) {
            return <tr><td colSpan="5">데이터가 없습니다</td></tr>;
        }

        return filteredBoardList.map((board) => (
            <tr key={board.bno}>
                <td>{board.bno}</td>
                <td className="title-align">
                    <Link to={'/board/boardPage/' + board.bno}>
                        {board.btitle} <strong>({board.bccnt})</strong>
                    </Link>
                </td>
                <td>{board.bwriter}</td>
                <td>{board.bdate}</td>
                <td><strong>{board.bcnt}</strong></td>
            </tr>
        ));
    };

    render() {
        return (
            <main id="main">
                <section className="content">
                    <div className="row">
                        <section className="intro-single">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-8">
                                        <div className="title-single-box">
                                            <h1 className="title-single">자유게시판</h1>
                                            <span className="color-text-a">자유롭게 대화해보세요!</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#">홈</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">자유게시판</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="community-grid grid">
                            <div className="container">
                                <div className="list-box">
                                    <div className="box-header with-border">
                                        <div className="row">
                                            <div className="search-box">
                                                <select name="searchType" onChange={this.handleSearchTypeChange}>
                                                    <option value="n">---전체---</option>
                                                    <option value="t">제목</option>
                                                    <option value="w">작성자</option>
                                                    <option value="tw">제목 / 작성자</option>
                                                </select>
                                                <input 
                                                    type="text" 
                                                    name='keyword' 
                                                    value={this.state.keyword}
                                                    onChange={this.handleKeywordChange}
                                                />
                                                <button onClick={this.handleSearch}>검색</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="board-main">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="short">글번호</th>
                                                        <th>제목</th>
                                                        <th className="middle">작성자</th>
                                                        <th className="long">작성일</th>
                                                        <th className="short">조회수</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.FloatBoardAppend()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="list-registBtn">
                                        <a href='/board/boardRegist'>
                                            <button className="green-button btn button-text" id="list-registBtn">
                                                <strong>작성하기</strong>
                                            </button>
                                        </a>
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

export default BoardList;