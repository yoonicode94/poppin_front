import { Component } from "react";

class mainView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <><div class="intro intro-carousel swiper position-relative">
                <div class="swiper-wrapper">
                    <div class="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(/resources/assets/img/slide-1.jpg)'}}/>
                        <div class="overlay overlay-a"></div>
                        <div class="intro-content display-table">
                            <div class="table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="intro-body">
                                                <h1 class="intro-title mb-4 ">
                                                    <span>망그러진 곰 </span>
                                                    <br/> 비밀의 다락방
                                                </h1>
                                                <p class="intro-subtitle intro-price">
                                                    <a href="#"><span class="price-a">2024년 7월 25일(목) ~ 8월 7일(수)</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(/resources/assets/img/slide-2.jpg)'}}>
                        <div class="overlay overlay-a"></div>
                        <div class="intro-content display-table">
                            <div class="table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="intro-body">
                                                <h1 class="intro-title mb-4">
                                                    <span>데드풀 </span>
                                                    <br/> <span>울버린 </span>
                                                    </h1>
                                                <p class="intro-subtitle intro-price">
                                                    <a href="#"><span class="price-a">2024년 7월 10일(수) ~ 8월 7일(수)</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(/resources/assets/img/slide-3.jpg)'}}>
                        <div class="overlay overlay-a"></div>
                        <div class="intro-content display-table">
                            <div class="table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="intro-body">
                                                <h1 class="intro-title mb-4">
                                                    <span>이토준지</span>
                                                    <br/> 호러하우스
                                                    </h1>
                                                <p class="intro-subtitle intro-price">
                                                    <a href="#"><span class="price-a">2024년 6월 15일(토) ~ 9월 8일(일)</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(/resources/assets/img/slide-2.jpg)'}}>
                        <div class="overlay overlay-a"></div>
                        <div class="intro-content display-table">
                            <div class="table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="intro-body">
                                                <h1 class="intro-title mb-4">
                                                    <span> FC세븐일레븐</span>
                                                    <br/> K리그x산리오
                                                    </h1>
                                                <p class="intro-subtitle intro-price">
                                                    <a href="#"><span class="price-a">2024년 7월 19일(금) ~ 8월 11일(일)</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                
            <main id="main">

                    <section class="section-property section-t8">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="title-wrap d-flex justify-content-between">
                                        <div class="title-box">
                                            <h2 class="title-a">최신 팝업스토어</h2>
                                        </div>
                                        <div class="title-link">
                                            <a href="#">전체 팝업스토어
                                                <span class="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="property-carousel" class="swiper">
                                <div class="swiper-wrapper">

                                    <div class="carousel-item-b swiper-slide">
                                        <div class="card-box-a card-shadow">
                                            <div class="img-box-a">
                                                <img src="/resources/assets/img/property-6.jpg" alt="" class="img-a img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-overlay-a-content">
                                                    <div class="card-header-a">
                                                        <h2 class="card-title-a">
                                                            <a href="#">망그러진 곰
                                                                <br /> 비밀의 다락방</a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-body-a">
                                                        <div class="price-box d-flex">
                                                            <span class="price-a">서울특별시 영등포구</span>
                                                        </div>
                                                        <a href="#" class="link-a">자세히 보기
                                                            <span class="bi bi-chevron-right"></span>
                                                        </a>
                                                    </div>
                                                    <div class="card-footer-a">
                                                        <ul class="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 class="card-info-title">사전예약</h4>
                                                                <span>✔</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">주차</h4>
                                                                <span>✔</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">휴무</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">온라인스토어</h4>
                                                                <span>✔</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-b swiper-slide">
                                        <div class="card-box-a card-shadow">
                                            <div class="img-box-a">
                                                <img src="/resources/assets/img/property-3.jpg" alt="" class="img-a img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-overlay-a-content">
                                                    <div class="card-header-a">
                                                        <h2 class="card-title-a">
                                                            <a href="#">데드풀
                                                                <br /> 울버린</a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-body-a">
                                                        <div class="price-box d-flex">
                                                            <span class="price-a">서울특별시 서대문구</span>
                                                        </div>
                                                        <a href="#" class="link-a">자세히 보기
                                                            <span class="bi bi-chevron-right"></span>
                                                        </a>
                                                    </div>
                                                    <div class="card-footer-a">
                                                        <ul class="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 class="card-info-title">사전예약</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">주차</h4>
                                                                <span>✔</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">휴무</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">온라인스토어</h4>
                                                                <span>✔</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-b swiper-slide">
                                        <div class="card-box-a card-shadow">
                                            <div class="img-box-a">
                                                <img src="/resources/assets/img/property-7.jpg" alt="" class="img-a img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-overlay-a-content">
                                                    <div class="card-header-a">
                                                        <h2 class="card-title-a">
                                                            <a href="#">이토준지
                                                                <br /> 호러하우스</a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-body-a">
                                                        <div class="price-box d-flex">
                                                            <span class="price-a">서울특별시 마포구</span>
                                                        </div>
                                                        <a href="#" class="link-a">자세히 보기
                                                            <span class="bi bi-chevron-right"></span>
                                                        </a>
                                                    </div>
                                                    <div class="card-footer-a">
                                                        <ul class="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 class="card-info-title">사전예약</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">주차</h4>
                                                                <span>✔</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">휴무</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">온라인판매</h4>
                                                                <span>✔</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-b swiper-slide">
                                        <div class="card-box-a card-shadow">
                                            <div class="img-box-a">
                                                <img src="/resources/assets/img/property-10.jpg" alt="" class="img-a img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-overlay-a-content">
                                                    <div class="card-header-a">
                                                        <h2 class="card-title-a">
                                                            <a href="#">FC 세븐일레븐
                                                                <br /> K리그x산리오</a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-body-a">
                                                        <div class="price-box d-flex">
                                                            <span class="price-a">서울특별시 송파구</span>
                                                        </div>
                                                        <a href="#" class="link-a">자세히 보기
                                                            <span class="bi bi-chevron-right"></span>
                                                        </a>
                                                    </div>
                                                    <div class="card-footer-a">
                                                        <ul class="card-info d-flex justify-content-around">
                                                            <li>
                                                                <h4 class="card-info-title">사전예약</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">주차</h4>
                                                                <span>✔</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">휴무</h4>
                                                                <span>✘</span>
                                                            </li>
                                                            <li>
                                                                <h4 class="card-info-title">온라인스토어</h4>
                                                                <span>✔</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="propery-carousel-pagination carousel-pagination"></div>

                        </div>
                    </section>

                    <section class="section-news section-t8">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="title-wrap d-flex justify-content-between">
                                        <div class="title-box">
                                            <h2 class="title-a">상품</h2>
                                        </div>
                                        <div class="title-link">
                                            <a href="#">전체 상품
                                                <span class="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="news-carousel" class="swiper">
                                <div class="swiper-wrapper">

                                    <div class="carousel-item-c swiper-slide">
                                        <div class="card-box-b card-shadow news-box">
                                            <div class="img-box-b">
                                                <img src="/resources/assets/img/post-2.jpg" alt="" class="img-b img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-header-b">
                                                    <div class="card-category-b">
                                                        <a href="#" class="category-b">Best</a>
                                                    </div>
                                                    <div class="card-title-b">
                                                        <h2 class="title-2">
                                                            <a href="#">뱃살망곰 키링
                                                                <br/> <span style={{fontSize: "16px"}}> 괜찮아 ! 망그러진 곰 KeyRing</span></a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-date">
                                                        <span class="date-b">7,500원</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-c swiper-slide">
                                        <div class="card-box-b card-shadow news-box">
                                            <div class="img-box-b">
                                                <img src="/resources/assets/img/post-5.jpg" alt="" class="img-b img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-header-b">
                                                    <div class="card-category-b">
                                                        <a href="#" class="category-b">Best</a>
                                                    </div>
                                                    <div class="card-title-b">
                                                        <h2 class="title-2">
                                                            <a href="#">데드풀&울버린 목걸이
                                                                <br/> <span style={{fontSize: "16px"}}>친구와의 우정을 나눠보세요 !</span></a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-date">
                                                        <span class="date-b">15,000원</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-c swiper-slide">
                                        <div class="card-box-b card-shadow news-box">
                                            <div class="img-box-b">
                                                <img src="/resources/assets/img/post-7.jpg" alt="" class="img-b img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-header-b">
                                                    <div class="card-category-b">
                                                        <a href="#" class="category-b">Best</a>
                                                    </div>
                                                    <div class="card-title-b">
                                                        <h2 class="title-2">
                                                            <a href="#"> 이토준지 토미에 반팔
                                                                <br/> <span style={{fontSize: "16px"}}>잘생쁨 토미에 반팔티로 유니크하게 !</span></a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-date">
                                                        <span class="date-b">31,000원</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item-c swiper-slide">
                                        <div class="card-box-b card-shadow news-box">
                                            <div class="img-box-b">
                                                <img src="/resources/assets/img/post-3.jpg" alt="" class="img-b img-fluid"/>
                                                </div>
                                            <div class="card-overlay">
                                                <div class="card-header-b">
                                                    <div class="card-category-b">
                                                        <a href="#" class="category-b">Best</a>
                                                    </div>
                                                    <div class="card-title-b">
                                                        <h2 class="title-2">
                                                            <a href="#">K리그x산리오 교통카드
                                                                <br/><span style={{fontSize: "16px"}}>오프라인 인기상품 교통카드</span></a>
                                                        </h2>
                                                    </div>
                                                    <div class="card-date">
                                                        <span class="date-b">8,600원</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="news-carousel-pagination carousel-pagination"></div>
                        </div>
                    </section>

                </main></>

        );
    }
}
export default mainView;