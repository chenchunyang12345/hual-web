import Link from 'next/link';
import { useRouter } from 'next/router';
const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

const HOVER_LINE = 3; // 底部线的宽度
const NAV_ARR = [
  { path: '/', name: '首页' },
  { path: '/technology', name: '核心与技术' },
  { path: '/product', name: '产品与服务' },
  { path: '/about', name: '关于我们' }
];

const Nav = () => {
  const router = useRouter();
  let { pathname } = router;
  const indexUrl = isProd ? './index.html' : '/';

  return (
    <header>
      <div className="inner">
        <div className="wrap">
          <div className="logo">
            <h1>
              <Link href={indexUrl}>
                  <a>华来知识</a>
              </Link>
            </h1>
          </div>
          <nav>
            <ul>
              {NAV_ARR.map((item, idx) => {
                const url = isProd ? `.${item.path === '/' ? item.path + 'index' : item.path}.html` : item.path;
                return (
                  <li key={idx}>
                    <Link href={url}>
                      <a className={item.path === pathname ? 'hover' : ''}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      {/* 样式 */}
      <style jsx>{`
        header {
          width: 100%;
          height: 60px;
          background-color: #000;
          color: #fff;
          display: flex;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 999;
        }
        .wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 8px;
        }
        .logo {
          width: 91px;
          height: 25px;
        }
        .logo h1 {
          width: 100%;
          height: 100%;
        }
        .logo h1 a {
          display: block;
          width: 100%;
          height: 100%;
          background-image: url('./static/hual-logo.png');
          background-size: 100% 100%;
          text-indent: -999em;
          overflow: hidden;
        }
        nav ul {
          display: flex;
          height: 100%;
        }
        nav ul li {
          font-size: 14px;
          margin-right: 76px;
        }
        nav ul li:nth-last-child(1) {
          margin-right: 0;
        }
        nav ul li a {
          display: block;
          padding: 0 9px;
          height: calc(100% - ${HOVER_LINE}px);
          color: #fff;
          line-height: 60px;
        }
        nav ul li a:hover {
          font-family: siyuan-medium;
          border-bottom: ${HOVER_LINE}px solid #3978fc;
        }
        .hover {
          font-family: siyuan-medium;
          border-bottom: ${HOVER_LINE}px solid #3978fc;
        }
      `}</style>
    </header>
  );
};

export default Nav;
