// 常量
const CONTENT = [
  {
    title: '自然语言处理',
    desc:
      '全球领先的自然语言处理技术，使华来可以处理保险、金融、医疗等各领域的自然语句，满足客户需求。'
  },
  {
    title: '知识图谱',
    desc:
      '华来拥有包括保险、金融、影视、法律等多行业多领域的知识图谱，同时支持使用深度学习框架的自动更新和维护'
  },
  {
    title: '数据挖掘',
    desc:
      '依靠数据挖掘技术，使华来可以在大数据中快速建立客服所需要的知识库，并更新数据中自动优化知识库'
  },
  {
    title: '机器学习',
    desc:
      '华来算法库包含了深度神经网络在内的各种机器学习算法与数学处理算法，相对行业内开源库，带来2-5倍性能提升'
  },
  {
    title: '情感分析',
    desc:
      '情感分析技术，可以使系统从情感角度判断用户意图，该技术应用于智能客服、舆情监控、市场调研等多个方案中'
  },
  {
    title: '对话管理',
    desc:
      '在进行人机交互时，对话管理技术对华来产品支持上下文理解、对话跳转、中断、恢复等多种功能。让人机交互不再是传统的Q&A，而是变成真正的对话交流'
  }
];
// 单个卡片
const Card = ({ content, idx }) => (
  <div className="card card-hover">
    <img
      src={`./static/ability-img${idx}.png`}
      className={`bg${idx}`}
      alt="能力图标"
    />
    <p className="title">{content.title}</p>
    <p className="desc">{content.desc}</p>
    <style jsx>{`
      .card {
        width: 366px;
        height: 312px;
        box-shadow: 0px 4px 32px -4px rgba(0, 120, 226, 0.12);
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 62px;
      }
      .card img {
        margin-bottom: 45px;
      }
      .bg1 {
        width: 51px;
        height: 48px;
      }
      .bg2 {
        width: 45px;
        height: 47px;
      }
      .bg3 {
        width: 49px;
        height: 49px;
      }
      .bg4 {
        width: 44px;
        height: 47px;
      }
      .bg5 {
        width: 49px;
        height: 42px;
      }
      .bg6 {
        width: 48px;
        height: 48px;
      }
      .title {
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 10px;
      }
      .desc {
        width: 278px;
        font-size: 14px;
        line-height: 20px;
        color: #555;
        text-align: center;
      }
    `}</style>
  </div>
);

// 整体
const Ability = () => (
  <div className="ability inner">
    {CONTENT.map((item, idx) => (
      <Card content={item} idx={idx + 1} key={idx} />
    ))}
    <style jsx>{`
      .ability {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 30px;
      }
    `}</style>
  </div>
);

export default Ability;
