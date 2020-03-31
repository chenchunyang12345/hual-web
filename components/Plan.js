// 常量
const ITEM_CONTENT = [
  {
    title: '智能语音平台',
    content:
      '华来智能语义平台通过先进AI算法，对企业提供有效地进行数据管理和分析、可视化图谱构建及对话管理、算法选择和优化、模型训练等服务。'
  },
  {
    title: '智能对话平台',
    content:
      '华来智能对话平台提供声纹识别、语义理解、对话图谱构建、对话管理和语音合成输出的完整技术服务和企业级应用。'
  },
  {
    title: '企业知识图谱构建',
    content:
      '华来企业知识图片构建服务，提供基于ToB业务场景和特定需求构建企业私有知识图谱，并提供高效的企业级数据应用，全程专业保持企业数据安全。'
  }
];

// 细分组件
const PlanItem = ({ idx, detail }) => (
  <div className={`plan-item bg${idx}`}>
    <div className="inner">
      <h5>{detail.title}</h5>
      <div className="content">
        <img src={`/static/plan-bg${idx}.png`} alt="流程图" />
        <div className="right">
          <div className="icon"></div>
          <p>{detail.content}</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .plan-item {
        width: 100%;
      }
      .bg1 {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(193, 193, 193, 0.15) 100%
        );
      }
      .bg1 img {
        width: 568px;
        height: 253px;
      }
      .bg2 img {
        width: 436px;
        height: 253px;
      }
      .bg3 {
        background: linear-gradient(
          180deg,
          rgba(193, 193, 193, 0.15) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .bg3 img {
        width: 583px;
        height: 194px;
      }
      .plan-item h5 {
        font-size: 18px;
        font-weight: 500;
        padding: 35px 0 40px;
      }
      .plan-item h5::before {
        content: '';
        width: 0;
        height: 18px;
        border: 1.5px solid #3978fc;
        border-radius: 4px;
        margin-right: 12px;
      }
      .content {
        padding-bottom: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .content p {
        width: 385px;
        line-height: 26px;
      }
      .right {
        display: flex;
        align-items: center;
      }
      .right .icon {
        width: 35px;
        height: 17px;
        background-image: url('/static/pointing-icon.png');
        background-size: 100% 100%;
        margin-right: 20px;
      }
      .right p {
        font-size: 16px;
      }
    `}</style>
  </div>
);

// 模块
const Plan = () => (
  <div>
    {ITEM_CONTENT.map((item, idx) => (
      <PlanItem idx={idx + 1} detail={item} key={idx} />
    ))}
  </div>
);

export default Plan;
