import '../../App.css'
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

  componentDidMount() {

    if (window.location.pathname === ('/boardlist') ||
      window.location.pathname === ('/member/memberinfo')) {
      if (sessionStorage.getItem("sessionLogin") != undefined) {
        return;
      }
      axios.post('http://localhost:8080/member/jwtChk', {
        token1: cookie.load('userid')
        , token2: cookie.load('username')
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
        <Route exact path="/" component={mainView} />
        <Route path="/popup/popuplist" component={popupList} />
        <Route path="/popup/popupread" component={popupRead} />
        <Route path="/boardlist" component={boardList} />
        <Route path="/boardpage" component={boardPage} />
        <Route path="/login" component={login} />
        <Route path="/join" component={join} />
        <Footer />
      </div>
    );
  }
}

export default App;
