import React, { Component } from "react";
import Layout from "../layout/layout";
import TeamCard from "../components/TeamCard";
import JoinCard from "../components/JoinCard";
import Partner from '../components/Partner';

/* 关于我们 */
class About extends Component {
  state = {
    teamitem: [
      {
        name: "朱小燕",
        professor: "清华计算机系教授 博导",
        position:
          "智能技术与系统国家重点实验室 主任@$北京市计算机学会 副理事长",
        portrait: "./static/portrait1@2x.png"
      },
      {
        name: "戴海生",
        professor: "清华大学 本硕博",
        position:
          "前IBM、联想、百度、京东 语音算法科学家@$百度联通智能客服系统、智慧法院 技术负责人",
        portrait: "./static/portrait2@2x.png"
      },
      {
        name: "郝宇",
        professor: "清华大学 本硕博",
        position:
          "加拿大IDRC与清华合作研发项目@$多项国家自然科学基金项目@$算法负责人",
        portrait: "./static/portrait3@2x.png"
      },
      {
        name: "代文韬",
        professor: "清华大学计算机系，本硕",
        position:
          "华来智能语义平台 系统架构师@$泰康智能机器人问答、舆情分析系统 技术负责人 ",
        portrait: "./static/portrait4@2x.png"
      },
      {
        name: "张钹",
        professor: "院士 清华计算机系教授",
        position: "前 智能技术与系统国家重点实验室 主任",
        portrait: "./static/portrait5@2x.png"
      },
      {
        name: "黄民烈",
        professor: "清华大学计算机系 本硕博 副教授",
        position: "多项国家自然科学基金项目，申请人，主要参与者",
        portrait: "./static/portrait6@2x.png"
      }
    ]
  };
  componentDidMount() {
    let designWidth = 1920;
    function computeFont() {
      // fontsize=视口Width/设计稿Width
      document.documentElement.style.fontSize =
        document.documentElement.clientWidth / designWidth + "px";
    }
    computeFont();
    // 视口大小发生变化时重新计算fontSize
    window.addEventListener("resize", computeFont);
    // 屏幕朝向发生变化时重新计算fontSize
    window.addEventListener("orientationchange", computeFont);
    let textPiece = document.querySelectorAll(".text_piece");
    let circularHover = document.querySelectorAll(".circular  ");
    let honorTextDate = document.querySelectorAll(".honor_text_date");
    textPiece.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        item.className = item.className + " " + "text_piece_hover";
        circularHover[index].className =
          circularHover[index].className + " " + "circular_hover";
        honorTextDate[index].className =
          honorTextDate[index].className + " " + "honor_text_date_hover";
      });
      item.addEventListener("mouseout", () => {
        item.className = item.className.split(" text_piece_hover").join("");
        circularHover[index].className = circularHover[index].className
          .split(" circular_hover")
          .join("");
        honorTextDate[index].className = honorTextDate[index].className
          .split(" honor_text_date_hover")
          .join("");
      });
    });
  }

  render() {
    return (
      <Layout title="华来知识 - 关于我们">
        <div className="main">
          <div className="banner">
            <p className="title1">公司简介</p>
            <p className="title2">
              华来知识立志于利用领先人工智能的科研技术，提供行业人工智能技术相关解决方案，提供企业效率，缩减企业成本
            </p>
          </div>
          <p className="title3 public_title1">我们是谁</p>
          <p className="title4">
            华来知识创立于2018年，由清华大学教授朱小燕、戴海生博士共同创办。核心技术团队来自清华大学智能技术与系统国家重点实验室及Google、腾讯、百度、搜狗等国内外知名机构及互联网企业，团队有长期的相关技术经验和积累，并已和多个知名企业开展合作。华来知识立志于利用知识图谱、语义理解技术，结合行业数据，打造行业智能生态环境，通过智能为企业赋能。
          </p>
          <p className="title3 public_title1">创始团队</p>
          <div className="team_content">
            {/*    换行中间加 @$   */}
            {this.state.teamitem.map((item, index) => {
              return (
                <TeamCard
                  name={item.name}
                  professor={item.professor}
                  position={item.position}
                  portrait={item.portrait}
                  key={index}
                />
              );
            })}
          </div>
          <div className="honor_content">
            <p className="title5 public_title1">企业荣誉</p>
            <div className="honor_first honor_hover">
              <div className="honor_left text_piece honor_first_vertical">
                <p className="honor_text float_right blue">三星</p>
                <p className="honor_text float_right">
                  情感文本内容识别和计算，实现对象相关内容的情感分布，该专利已被
                </p>
                <p className="honor_text float_right">
                  收购，三星市场部目前正应用该系统分析其产品的用户体验动态变化
                  <br />
                  <br />
                  社交媒体问答数据的挖掘和应用能力持续提升，并与各B端客户合作应用到对话系统设计中，例如音乐查询、大众健康问答、餐饮对话等相关领域的查询和问答系统。
                </p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_first_vertical"></div>
              </div>
              <div className="honor_right">
                <p className="honor_text_date">2018-至今</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left">
                <p className="honor_text_date float_right">2017</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_second_vertical"></div>
              </div>
              <div className="honor_right text_piece honor_second_vertical">
                <p className="honor_text blue">
                  ECM情绪化聊天机器人中国问世，被英国卫报报道，国家领导人参观访问
                </p>
                <br />
                <br />
                <br />
                <p className="honor_text blue">朱小燕教授</p>
                <p className="honor_text">带领清华大学搜狗搜索联合战队获得</p>
                <p className="honor_text blue">
                  NTCIR13-STC2评测比赛总排名第一名
                </p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left text_piece piece_size_one">
                <p className="honor_text float_right">
                  开始垂直领域问答/对话/交互系统研究，完成多个整体系统，并实施部署上线
                </p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_second_vertical"></div>
              </div>
              <div className="honor_right">
                <p className="honor_text_date">2012</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left">
                <p className="honor_text_date float_right">2010</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_second_vertical"></div>
              </div>
              <div className="honor_right text_piece piece_size_one">
                <p className="honor_text blue">开始知识图谱的研究</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left text_piece honor_first_vertical">
                <p className="honor_text float_left">
                  获得加拿大政府的国际开发研究中心（IDRC）的
                </p>
                <p className="honor_text float_left blue">
                  首席科学家基金（IRCI）
                </p>
                <p className="honor_text float_right">资助的</p>
                <br />
                <p className="honor_text">
                  项目（5+2年，共100+30万加元），同时
                </p>

                <p className="honor_text float_right blue">
                  朱小燕本人获得加拿大国际首席科学家
                  <br />
                  称号。
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="honor_text float_right">
                  ，完成趣答系统。该系统后来被科大讯飞收
                  <br />购
                </p>
                <p className="honor_text float_right">开始研究</p>
                <p className="honor_text float_right blue">
                  中文开放域无约束问答系统
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="honor_text float_right">国际竞赛获得第一</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_fifth_vertical"></div>
              </div>
              <div className="honor_right">
                <p className="honor_text_date">2009</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left">
                <p className="honor_text_date float_right">2007</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_second_vertical"></div>
              </div>
              <div className="honor_right text_piece piece_size_one">
                <p className="honor_text blue">国际竞赛获得第一</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left text_piece honor_second_vertical">
                <p className="honor_text float_right">
                  ，算法曾转让（license）给了美国生物信
                </p>
                <p className="honor_text float_right blue">
                  蛋白质名词实体识别国际竞赛第一名
                </p>
                <p className="honor_text float_right">
                  息研究中心NCBI（National Center for Biotechnology
                  Information）
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="honor_text float_right blue">
                  原型系统QUANTA，达到当时最好水平
                </p>
                <p className="honor_text float_right">完成基于Google的</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
                <div className="vertical honor_second_vertical"></div>
              </div>
              <div className="honor_right">
                <p className="honor_text_date">2006</p>
              </div>
            </div>

            <div className="honor_item honor_hover">
              <div className="honor_left">
                <p className="honor_text_date float_right">2005</p>
              </div>
              <div className="honor_center">
                <div className="circular"></div>
              </div>
              <div className="honor_right text_piece piece_size_one">
                <p className="honor_text blue">
                  开始研究基于信息距离理论的开放域事实性问答系统
                </p>
              </div>
            </div>
          </div>
          <div className="inner">
            <h4>我们合作的客户</h4>
            <Partner />
          </div>
          <p className="title3 public_title1">加入我们</p>
          <div className="card_join inner">
            {/* <JoinCard
              text1="Boss直聘"
              portrait="./static/boss@2x.png"
              text2="华来BOSS直聘招聘主页"
              buttonName="进入平台"
              url="/"
            /> */}
            <JoinCard
              text1="拉钩"
              portrait="./static/lagou@2x.png"
              text2="华来拉勾招聘主页"
              buttonName="进入平台"
              url="https://www.lagou.com/gongsi/478108.html"
            />
          </div>
          <p className="title3 public_title1">联系我们，了解更多详细信息</p>
          <div className="contact_button">
            <a href="Mailto:business@hual.ai">联系我们</a>
          </div>
        </div>
        <style jsx>{`
          .main {
            padding-bottom: 80px;
            width: 100vw;
          }
          .banner {
            width: 100vw;
            height: 650px;
            background-image: url("./static/banner.png");
            background-position: center center;
            overflow: hidden;
          }
          .title1 {
            width: 104px;
            height: 37px;
            font-size: 26px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 37px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 260px;
          }
          .title2 {
            width: 918px;
            height: 26px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 26px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 6px;
          }
          .title3 {
            margin-top: 75px;
          }
          .title4 {
            width: 1135px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 32px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
            margin-top: 55px;
          }
          .title5 {
            margin-top: 30px;
          }
          .team_content {
            width: 1136px;
            height: 787px;
            margin-left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            margin-top: 55px;
          }
          .honor_content {
            width: 100%;
            height: 1371px;
            background: rgba(193, 193, 193, 0.1);
            margin-top: 46px;
            overflow: hidden;
          }
          .honor_first {
            width: 1188px;
            display: flex;
            margin-top: 58px;
            margin-left: 50%;
            transform: translateX(-50%);
          }
          .honor_item {
            width: 1188px;
            display: flex;
            margin-left: 50%;
            transform: translateX(-50%);
          }
          .honor_left {
            width: 580px;
          }
          .honor_center {
            width: 16px;
            margin-left: 16px;
          }
          .honor_right {
            width: 580px;
            margin-left: 16px;
          }

          .honor_first_vertical {
            height: 205px;
          }
          .honor_second_vertical {
            height: 120px;
          }
          .piece_size_one {
            height: 60px;
          }
          .piece_size_two {
            height: 60px;
          }
          .piece_size_three {
            height: 60px;
          }
          .honor_fifth_vertical {
            height: 192px;
          }
          .circular {
            width: 16px;
            height: 16px;
            background: rgba(196, 198, 207, 1);
            border-radius: 16px;
            margin-top: 5px;
            cursor: pointer;
          }
          .vertical {
            width: 2px;
            background: rgba(220, 222, 227, 1);
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 5px;
            cursor: pointer;
          }

          .float_right {
            float: right;
            text-align: right;
          }
          .float_left {
            float: left;
            text-align: left;
          }

          .honor_text {
            font-size: 16px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 26px;
            display: inline;
          }
          .honor_text_date {
            font-size: 16px;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
            line-height: 16px;
            margin-top: 5px;
            cursor: pointer;
          }
          .blue {
            color: rgba(19, 65, 164, 1);
          }
          .text_piece {
            padding: 0 0px;
            cursor: pointer;
          }
          .text_piece_hover {
            background: linear-gradient(
              180deg,
              rgba(196, 219, 255, 0.1) 0%,
              rgba(146, 180, 254, 0.1) 100%
            );
            border-radius: 6px;
          }
          .circular_hover {
            background: rgba(57, 120, 252, 1);
          }
          .honor_text_date_hover {
            color: rgba(57, 120, 252, 1);
          }

          .card_join {
            display: flex;
            justify-content: center;
            margin-top: 55px;
          }
          .contact_button {
            width: 198px;
            height: 44px;
            border-radius: 3px;
            border: 1px solid rgba(85, 132, 255, 1);
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 50px;
            font-size: 16px;
            font-family: PingFang-SC-Regular, PingFang-SC;
            font-weight: 400;
            line-height: 42px;
            text-align: center;
            cursor: pointer;
          }
          .contact_button a {
            display: block;
            width: 100%;
            height: 100%;
            color: rgba(57, 120, 252, 1);
          }
          .public_title1 {
            width: 100%;
            height: 28px;
            font-size: 20px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
          }
        `}</style>
      </Layout>
    );
  }
}

export default About;
