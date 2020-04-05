import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = ({ children, title = '华来知识' }) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      {children}
      <Footer />
      <style jsx global>{`
        // 版心
        .inner {
          width: 1132px;
          margin: 0 auto;
        }
        // 小标题
        h4 {
          margin: 75px 0 55px;
          text-align: center;
          font-size: 20px;
          font-family: siyuan-medium;
        }
        // 整体卡片hover样式
        .card-hover:hover {
          box-shadow: 0px 4px 32px -4px rgba(0, 120, 226, 0.4) !important;
        }
        // 防止锚点出现在fixed导航之下（暗锚）
        .anchor {
          position: relative;
          top: -60px;
          display: block;
          height: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Layout;
