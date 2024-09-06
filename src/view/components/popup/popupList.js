import { Component } from "react";

class popupList extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                                    <h1 class="title-single">진행중인 팝업스토어</h1>
                                    <span class="color-text-a">골라골라</span>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb"
                                    class="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">홈</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">
                                            팝업스토어</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="property-grid grid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="grid-option">
                                    <form>
                                        <select class="custom-select">
                                            <option selected>All</option>
                                            <option value="1">New to Old</option>
                                            <option value="2">For Rent</option>
                                            <option value="3">For Sale</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-box-a card-shadow">
                                    <div class="img-box-a">
                                        <img src="${popupVO.simg}" alt="" class="img-a img-fluid" />
                                    </div>
                                    <div class="card-overlay">
                                        <div class="card-overlay-a-content">
                                            <div class="card-header-a">
                                                <h2 class="card-title-a">
                                                    <a href="/popup/popupread?sno=${popupVO.sno}">팝업 이름
                                                    </a>
                                                </h2>
                                            </div>
                                            <div class="card-body-a">
                                                <div class="price-box d-flex"></div>
                                                <a href="#" class="link-a">개최 장소 <span
                                                    class="bi bi-chevron-right"></span>
                                                </a>
                                            </div>
                                            <div class="card-footer-a">
                                                <ul class="card-info d-flex justify-content-around">
                                                    <li>
                                                        <h4 class="card-info-title">개최날짜</h4> <span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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
export default popupList;