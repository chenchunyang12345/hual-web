import Link from 'next/link';
// 常量
const DESC = ['智能语音', '企业知识图谱构建', '智能对话平台'];

// 单个卡片
const CardItem = ({ content, idx }) => (
  <div className="cardItem card-hover">
    <img
      src={`./static/core-bg${idx}.png`}
      className={`bg${idx}`}
      alt="技术logo"
    />
    <p>{content}</p>
    <Link href={`${process.env.path.nav2}#t${idx}`}>
      <a className="link">
        查看更多
      </a>
    </Link>
    {/* 样式 */}
    <style jsx>{`
      .cardItem {
        width: 366px;
        height: 414px;
        background: linear-gradient(
          360deg,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(73, 95, 230, 0.04) 100%
        );
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bg1 {
        width: 113px;
        height: 200px;
        margin-top: 42px;
      }
      .bg2 {
        width: 140px;
        height: 164px;
        margin-top: 79px;
      }
      .bg3 {
        width: 121px;
        height: 217px;
        margin-top: 26px;
      }
      .cardItem p {
        margin-top: 14px;
        margin-bottom: 67px;
        font-size: 18px;
      }
      .link {
        width: 92px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 14px;
        color: #3978fc;
        border-radius: 3px;
        border: 1px solid rgb(85, 132, 255);
      }
      .link:hover {
        background-color: #5584ff;
        color: #fff;
      }
    `}</style>
  </div>
);

// 整体
const Core = () => (
  <div className="core">
    {DESC.map((item, idx) => (
      <CardItem content={item} idx={idx + 1} key={idx} />
    ))}
    {/* 样式 */}
    <style jsx>{`
      .core {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default Core;
