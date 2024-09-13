import { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import $ from 'jquery';


class PopupRead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get_sno: props.match.params.sno,

        };
    }

    componentDidMount(){
       this.callPopupInfoApi() 
    }

    callPopupInfoApi = async () => {
        try{
            await axios.get('http://localhost:8080/popup/popupRead/'+this.state.get_sno,{
            }).then(response => {
                var data = response.data.popupRead[0]
                //var data = response.data.popupRead[0]
                $('#popup_name').text(data.sname)
                $('#popup_con').text(data.scon)
                $('#popup_plc').text(data.splc)
                $('#popup_img').attr('src',data.simg)
                $('#popup_video').attr('src',data.smedia)
                $('#popup_map').attr('src',data.smap)
                
            });
            
        } catch(error){
            console.error(error);
            alert('axios 에러');
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
                                    <h1 class="title-single" id = "popup_name"></h1>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb"
                                    class="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">홈</a></li>
                                        <li class="breadcrumb-item"><a href="property-grid.html">팝업스토어</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page" id = "popup_name">
                                            </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                </section>

                <section class="property-single nav-arrow-b">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div id="property-single-carousel" class="swiper">
                                    <div class="swiper-wrapper">
                                        <div class="carousel-item-b swiper-slide">
                                            <img src="" alt="" id="popup_img"/>
                                        </div>
                                        <div class="carousel-item-b swiper-slide">
                                            <img src="/resources/assets/img/junji-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="property-single-carousel-pagination carousel-pagination"></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12">

                                <div class="row justify-content-between">
                                    <div class="col-md-5 col-lg-4">
                                        <div class="property-price d-flex justify-content-center foo">
                                            <div class="card-header-c d-flex">
                                                <div class="card-title-c align-self-center"></div>
                                            </div>
                                            <div class="property-summary">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="title-box-d section-t4">
                                                            <h3 class="title-d">운영시간</h3>
                                                            <p><strong id = "popup_plc">팝업스토어 장소</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="summary-list">
                                                    <ul class="list">
                                                        <li class="d-flex justify-content-between"><strong>월:</strong>
                                                            <span>11:00 ~ 19:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>화:</strong>
                                                            <span>11:00 ~ 19:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>수:</strong>
                                                            <span>11:00 ~ 19:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>목:</strong>
                                                            <span>11:00 ~ 19:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>금:</strong>
                                                            <span>11:00 ~ 21:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>토:</strong>
                                                            <span>11:00 ~ 21:00</span></li>
                                                        <li class="d-flex justify-content-between"><strong>일:</strong>
                                                            <span>11:00 ~ 19:00</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-lg-7 section-md-t3">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="title-box-d">
                                                    <h3 class="title-d">상세내용</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="property-description">
                                            <p class="description color-text-a" id="popup_con"><strong>팝업스토어 설명</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-10 offset-md-1">
                                <ul class="nav nav-pills-a nav-pills mb-3 section-t3"
                                    id="pills-tab" role="tablist">
                                    <li class="nav-item"><a class="nav-link active"
                                        id="pills-video-tab" data-bs-toggle="pill" href="#pills-video"
                                        role="tab" aria-controls="pills-video" aria-selected="true">비디오</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <iframe
                                        src="https://www.youtube.com/embed/P24x81R2xfA?si=hKLoWeiiSNEpedeU"
                                        width="100%" height="460" frameborder="0" webkitallowfullscreen
                                        mozallowfullscreen allowfullscreen id = "popup_video"></iframe>
                                </div>
                                <div class="col-md-10 offset-md-1">
                                    <ul class="nav nav-pills-a nav-pills mb-3 section-t3"
                                        id="pills-tab" role="tablist">
                                        <li class="nav-item"><a class="nav-link active"
                                            id="pills-video-tab" data-bs-toggle="pill" href="#pills-video"
                                            role="tab" aria-controls="pills-video" aria-selected="true">지도</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.237538564367!2d126.92585117568048!3d37.52589747204912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45c3d89d7801%3A0x7883571cabf15b8b!2z642U7ZiE64yAIOyEnOyauA!5e0!3m2!1sko!2skr!4v1721704219173!5m2!1sko!2skr"
                                            width="100%" height="450" style={{border: "0"}} allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" id = "popup_map"></iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default PopupRead;
   