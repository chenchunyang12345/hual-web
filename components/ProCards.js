import Link from 'next/link';
// 常量
const CONTENT = [
    {
        title: 'AI培训',
        desc: '模拟保险销售真实工作场景\n实现从入门到职业能力全面掌握',
    },
    {
        title: '保险行业知识化解决方案',
        desc: '模拟保险销售真实工作场景\n实现从入门到职业能力全面掌握',
    },
    {
        title: 'ai客服服务方案',
        desc: '模拟保险销售真实工作场景\n实现从入门到职业能力全面掌握',
    },
    {
        title: 'EHR',
        desc: '模拟保险销售真实工作场景\n实现从入门到职业能力全面掌握',
    }
]
// 单个卡片
const Card = ({ content, idx }) => (
    <div className={`card bg${idx}`}>
        <div className="hover-wrap">
            <p className="title">{content.title}</p>
            <div className="line"></div>
            {/* 下面的内容 */}
            <div className="hover-bg">
                <p className="title-hide">{content.title}</p>
                <p className="desc-hide">{content.desc}</p>
                <Link href="#">
                    <a className="link" target="_blank">了解更多</a>
                </Link>
            </div>
        </div>
        {/* 样式 */}
        <style jsx>{`
            .card {
                width: 275px;
                height: 312px;
                background-color: orange;
                margin-right: 14px;
                border-radius:6px;
                overflow: hidden;
                color: #fff;
                position: relative;
                font-size: 18px;
            }
            // 图片
            .bg${idx} {
                background-image: url('/static/pro-bg${idx}.png');
                background-size: 100% 100%;
            }
            .card:nth-last-child(1) {
                margin-right: 0;
            }
            .card:hover .hover-wrap {
                top: -100%;
            }
            .hover-wrap {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.5s ease;
            }
            .hover-bg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 100%;
                background-color: rgba(0, 28, 87, 0.7);
                transition: all 0.5s ease;
            }
            .title {
                width: 100%;
                text-align: center;
                padding-top: 144px;
            }
            .line {
                width: 63px;
                height: 0;
                border: 2px solid #fff;
                border-radius: 2px;
                margin: 5px auto 0;
            }
            .title-hide {
                width: 100%;
                text-align: center;
                padding-top: 85px;
                padding-bottom: 12px;
            }
            .desc-hide {
                width: 196px;
                text-align: center;
                margin: 0 auto;
                font-size: 14px;
                white-space: pre-wrap;
                line-height: 20px;
            }
            .link {
                width: 92px;
                height: 32px;
                line-height: 32px;
                border: 1px solid #fff;
                text-align: center;
                position: absolute;
                bottom: 84px;
                left: 92px;
                font-size: 14px;
                color: #fff;
                border-radius: 3px;
            }
        `}</style>
    </div>
)

// 整体
const ProCards = () => (
    <div className="cards-container">
        {
            CONTENT.map((item, idx) => (
                <Card content={item} idx={idx + 1} key={idx} />
            ))
        }
        {/* 样式 */}
        <style jsx>{`
            .cards-container {
                display: flex;
            }
        `}</style>
    </div>
)

export default ProCards;