const Footer = () => (
  <footer>
    <div className="inner">
      <div className="introduce">
        <div className="logo">logo</div>
        <p className="introduce_text">
          行业领先的AI语音语音技术服务提供商。
          <br />
          致力于利用知识图谱、语义理解技术，结合行业数据，
          <br />
          打造行业智能生态环境，为企业AI创新赋能。
        </p>
      </div>
      <div className="core explain">
        <p className="headline">核心技术</p>
        <div className="content">
          <p className="subhead">智能语音平台</p>
          <p className="subhead">企业知识图片构建</p>
          <p className="subhead">智能对话平台</p>
          <p className="subhead"></p>
        </div>
      </div>
      <div className="product explain">
        <p className="headline">产品与服务</p>
        <div className="content">
          <p className="subhead">AI培训</p>
          <p className="subhead">保险行业知识化解决方案</p>
          <p className="subhead">ai客服服务方案</p>
          <p className="subhead">EHR</p>
        </div>
      </div>
      <div className="contact explain">
        <p className="headline">联系我们</p>
        <div className="content">
          <p className="subhead">
            媒体垂询
            <br />
            media@hual.ai
          </p>
          <p className="subhead">
            商务合作
            <br />
            business@hual.ai
          </p>
          <p className="subhead">
            市场合作
            <br />
            mkt@hual.ai
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      footer {
        width: 100vw;
        height: 312px;
        background: rgba(0, 4, 23, 1);
        opacity: 0.75;
      }
      .inner {
        display: flex;
      }
      .introduce {
        width: 360px;
      }
      .logo {
        width: 121px;
        height: 39px;
        margin-top: 49px;
        background-color: yellow;
      }
      .introduce_text {
        width: 100%;
        margin-left: 9px;
        margin-top: 26px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 22px;
      }
      .explain {
        width: 160px;
        margin-left: 80px;
      }
      .core{
        margin-left: 132px;
      }
      .headline {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        margin-top: 49px;
      }
      .content {
        margin-top: 32px;
      }
      .subhead {
        margin-top: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 22px;
      }
    `}</style>
  </footer>
);

export default Footer;
