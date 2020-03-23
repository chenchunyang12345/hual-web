import Link from 'next/link';
import { useRouter } from 'next/router';

const HOVER_LINE = 3; // 底部线的宽度
const NAV_ARR = [   // 导航
    {path: '/', name: '首页'}, 
    {path: '/technology', name: '核心与技术'}, 
    {path: '/product', name: '服务和产品'}, 
    {path: '/about', name: '关于我们'}
];

const Nav = () => {
    const router = useRouter();
    let { pathname } = router;

    return (
        <header>
            <div className="inner">
                <div className="wrap">
                    <h1>华来知识logo图</h1>
                    <nav>
                        <ul>
                            {
                                NAV_ARR.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href={item.path}>
                                            <a className={item.path === pathname? "hover" : ""}>{item.name}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            {/* 样式 */}
            <style jsx>{`
                header {
                    width: 100vw;
                    height: 60px;
                    background-color: #000;
                    color: #fff;
                    display: flex;
                }
                .wrap {
                    display: flex;
                    justify-content: space-between;
                }
                h1 {
                }
                nav ul {
                    display: flex;
                    height: 100%;
                }
                nav ul li {
                    font-size: 14px;
                    margin-right: 76px;
                }
                nav ul li a {
                    display: block;
                    padding: 0 9px;
                    height: calc(100% - ${HOVER_LINE}px);
                    color: #fff;
                    line-height: 60px;
                }
                nav ul li a:hover {
                    border-bottom: ${HOVER_LINE}px solid #3978fc;
                }
                .hover {
                    border-bottom: ${HOVER_LINE}px solid #3978fc;
                }
            `}</style>
        </header>
    );
};

export default Nav;
