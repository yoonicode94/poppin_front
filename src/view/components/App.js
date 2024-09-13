
import '../../App.css'
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { Route } from 'react-router-dom';
import React, { Component } from 'react';

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
          <Route exact path='/' component={mainView}/>
          <Route path='/popup/popupList' component={popupList} />
          <Route path='/popup/popupRead/:sno' component={popupRead} />
          <Route path='/board/boardList' component={boardList} />
          <Route path='/board/boardPage/:bno' component={boardPage} />
          <Route path='/board/boardRegist' component={boardRegist} />
        <Footer/>
        
      </div>
    );
  }
}

export default App;
