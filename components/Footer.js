import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="inner">
      <div className="introduce">
        <div className="logo"></div>
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
          <Link href={`${process.env.path.nav2}#t1`}>
            <a className="subhead">智能语音平台</a>
          </Link>
          <Link href={`${process.env.path.nav2}#t2`}>
            <a className="subhead">企业知识图片构建</a>
          </Link>
          <Link href={`${process.env.path.nav2}#t3`}>
            <a className="subhead">智能对话平台</a>
          </Link>
        </div>
      </div>
      <div className="product explain">
        <p className="headline">产品与服务</p>
        <div className="content">
          <Link href={`${process.env.path.nav3}#p1`}>
            <a className="subhead">AI培训</a>
          </Link>
          <Link href={`${process.env.path.nav3}#p2`}>
            <a className="subhead">保险行业知识化解决方案</a>
          </Link>
          <Link href={`${process.env.path.nav3}#p3`}>
            <a className="subhead">ai客服服务方案</a>
          </Link>
          <Link href={`${process.env.path.nav3}#p4`}>
            <a className="subhead">EHR</a>
          </Link>
        </div>
      </div>
      <div className="contact explain">
        <p className="headline">联系我们</p>
        <div className="content">
          <p className="subhead">
            媒体垂询
            <br />
            <a href="Mailto:media@hual.ai" className="mail_link">media@hual.ai</a>
          </p>
          <p className="subhead">
            商务合作
            <br />
            <a href="Mailto:business@hual.ai" className="mail_link">business@hual.ai</a>
          </p>
          <p className="subhead">
            市场合作
            <br />
            <a href="Mailto:mkt@hual.ai" className="mail_link">mkt@hual.ai</a>
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      footer {
        width: 100vw;
        height: 312px;
        background-image: url('./static/footer-bg.png'); 
        background-size: 100% 100%;       
      }
      .inner {
        display: flex;
      }
      .introduce {
        width: 360px;
      }
      .logo {
        width: 91px;
        height: 25px;
        margin-top: 63px;
        margin-left: 9px;
        background-image: url('./static/hual-logo.png');
        background-size: 100% 100%;
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
      .core {
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
        display: block;
        margin-top: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 22px;
      }
      .mail_link {
        color: rgba(255, 255, 255, 0.6);
      }
      .mail_link:hover {
        text-decoration: underline;
      }
    `}</style>
  </footer>
);

export default Footer;
