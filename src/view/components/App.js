import '../../App.css'
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

//header
import HeaderAdmin from './header/HeaderAdmin';

//footer
import Footer from './footer/Footer';

//팝업  스토어
import popupList from './popup/popupList';
import popupRead from './popup/popupRead';

//main 
import mainView from './mainView';

//게시판 
import boardList from './board/boardList';
import boardPage from './board/boardPage';
import boardRegist from './board/boardRegist';

//회원기능
import join from './member/join';
import login from './member/login';

//css
import '../../resources/assets/img/favicon.png';
import '../../resources/assets/img/apple-touch-icon.png';
import '../../resources/assets/vendor/animate.css/animate.min.css';
import '../../resources/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../resources/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../resources/assets/vendor/swiper/swiper-bundle.min.css';
import '../../resources/assets/css/style.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //인터셉터 기능
  componentDidMount() {

    if (window.location.pathname === ('/board/boardlist') ||
      window.location.pathname === ('/member/memberinfo') ||
      window.location.pathname === ('/board/boardregist')) {

      axios.post('http://localhost:8080/member/jwtChk', {
        token1: cookie.load('userid'),
        token2: cookie.load('username')
      })
        .then(response => {
          this.state.userid = response.data.token1
          let password = cookie.load('userpassword')
          if (password !== undefined) {
            axios.post('http://localhost:8080/member/jwtLogin', {
              mid: this.state.userid,
              mpw: password
            })
              .then(response => {
                if (response.data.jwtLogin[0].mid === undefined) {
                  this.noPermission()
                }
              })
              .catch(error => {
                this.noPermission()
              });
          } else {
            this.noPermission()
          }
        })
        .catch(response => this.noPermission());
    }
  }

  noPermission = (e) => {
    this.remove_cookie();
    window.location.href = '/login';
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/' });
    cookie.remove('username', { path: '/' });
    cookie.remove('userpassword', { path: '/' });
  }

  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        {/* <Routes>
            <Route exact path="/" Component={mainView}/>
            <Route path="/popup/popupList" Component={popupList} />
            <Route path="/popup/popupRead/:sno" Component={popupRead} />
            <Route path="/board/boardList" Component={boardList} />
            <Route path="/board/boardPage" Component={boardPage} />
          </Routes> */}
        <Route exact path='/' component={mainView} />
        <Route path='/popup/popupList' component={popupList} />
        <Route path='/popup/popupRead/:sno' component={popupRead} />
        <Route path='/board/boardList' component={boardList} />
        <Route path='/board/boardPage/:bno' component={boardPage} />
        <Route path='/board/boardRegist' component={boardRegist} />
        <Route path="/login" component={login} />
        <Route path="/join" component={join} />
        <Footer />
      </div>
    );
  }
}

export default App;
