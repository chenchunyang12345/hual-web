import { Component } from 'react';
import Swiper from 'swiper/js/swiper.min';
import Layout from '../layout/layout';
import ProCards from '../components/ProCards';
import Partner from '../components/Partner';
import Core from '../components/Core';

class Home extends Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    render() {
        return (
            <Layout>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide item1">
                            <div className="inner">
                                <h3>华来科技</h3>
                                <p>行业领先的AI语音语音技术服务提供商</p>
                                <p>
                                    致力于利用知识图谱、语义理解技术，结合行业数据，打造行业智能生态环境，为企业AI创新赋能。
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item2">
                            <div className="inner">
                                <h3>华来科技</h3>
                                <p>成熟的ToB AI解决方案</p>
                                <ul>
                                    <li>智能语义平台</li>
                                    <li>智能对话系统</li>
                                    <li>企业知识图谱构建</li>
                                    <li>声纹识别管理和应用平台</li>
                                </ul>
                            </div>
                        </div>
                        <div className="swiper-slide item3">
                            <div className="inner">
                                <h3>华来科技</h3>
                                <p>扎实技术底蕴，与众多行业一线企业合作</p>
                                <p>
                                    为招商银行、泰康人寿、国家电网、谷歌、腾讯、阿里巴巴等数家企业提供技术解决方案
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="inner">
                    {/* 核心技术 */}
                    <div className="tec">
                        <h4>核心技术</h4>
                        <Core />
                    </div>
                    {/* 服务和产品展示 */}
                    <div className="pro">
                        <h4>服务和产品展示</h4>
                        <ProCards />
                    </div>
                    {/* 优质客户 */}
                    <div className="cli">
                        <h4>优质客户</h4>
                        <Partner />
                    </div>
                </div>
                <style jsx>{`
                    .swiper-container {
                        width: 100%;
                        height: 650px;
                        --swiper-theme-color: #fff;
                        font-weight: 500;
                    }
                    .swiper-slide {
                        width: 100%;
                        color: #fff;
                        background-position: center center;
                    }
                    .swiper-slide h3 {
                        font-size: 40px;
                        padding-top: 233px;
                        padding-bottom: 36px;
                    }
                    .item1 {
                        background-image: url('/static/home-banner1.png');
                    }
                    .item1 p:nth-child(2) {
                        font-size: 26px;
                        line-height: 37px;
                    }
                    .item1 p:nth-child(3) {
                        font-size: 18px;
                        line-height: 26px;
                        width: 590px;
                        padding-top: 6px;
                        color: rgba(255, 255, 255, 0.8);
                    }
                    .item2 {
                        background-image: url('/static/home-banner2.png');
                    }
                    .item2 p {
                        font-size: 26px;
                        line-height: 37px;
                    }
                    .item2 ul {
                        padding-top: 5px;
                        padding-left: 18px;
                    }
                    .item2 ul li {
                        list-style: disc;
                        color: rgba(255, 255, 255, 0.8);
                        line-height: 28px;
                    }
                    .item3 {
                        background-image: url('/static/home-banner3.png');
                    }
                    .item3 p:nth-child(2) {
                        font-size: 26px;
                        line-height: 37px;
                    }
                    .item3 p:nth-child(3) {
                        font-size: 18px;
                        line-height: 26px;
                        width: 550px;
                        padding-top: 6px;
                        color: rgba(255, 255, 255, 0.8);
                    }
                    .swiper-pagination :global(.swiper-pagination-bullet) {
                        background: #fff;
                        opacity: 0.5;
                    }
                    .swiper-pagination
                        :global(.swiper-pagination-bullet-active) {
                        opacity: 1;
                    }
                    .cli {
                        padding-bottom: 95px;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default Home;
