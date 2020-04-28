import Layout from '../layout/layout';
import Plan from '../components/Plan';
import Ability from '../components/Ability';

const Technology = () => (
  <Layout title="华来知识 - 核心与技术">
    {/* banner部分 */}
    <div className="banner">
      <p>华来面向各类企业建立人工智能驱动的知识体系</p>
      <p>
        提供包括自然语言处理、知识图谱、数据挖掘、机器学习、情感分析、对话管理等核心技术
      </p>
    </div>
    {/* 核心技术方案 */}
    <div className="area1">
      <h4>核心技术方案</h4>
      <Plan />
    </div>
    {/* 技术能力 */}
    <div className="area2">
      <h4>技术能力</h4>
      <Ability />
    </div>
    <style jsx>{`
      .banner {
        width: 100%;
        height: 650px;
        text-align: center;
        color: #fff;
        background-image: url('./static/tec-banner.png');
        background-color: #000;
        background-position: center 0;
        font-family: siyuan-medium;
      }
      .banner p:nth-child(1) {
        font-size: 26px;
        line-height: 37px;
        padding-top: 260px;
        margin-bottom: 6px;
      }
      .banner p:nth-child(2) {
        font-size: 18px;
        line-height: 26px;
        color: rgba(255, 255, 255, 0.8);
      }
    `}</style>
  </Layout>
);

export default Technology;
