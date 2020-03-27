import Link from "next/link";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children, title = "华来知识" }) => {
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
      `}</style>
    </div>
  );
};

export default Layout;
