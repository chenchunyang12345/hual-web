import React, { Component } from 'react';
import Layout from '../layout/layout';
/* 产品与服务 */

class Product extends Component {
  render() {
    return (
      <Layout title="华来知识 - 产品与服务">
        <div className="main">
          <div className="jishu">
            <p className="title1">华来知识</p>
            <p className="title2">产品与服务</p>
          </div>
          <div className="inner">
            <div className="anchor" id="p1"></div>
            <div className="box_first">
              <div className="box_text">
                <div className="title1_content">
                  <p className="title1_num public_title1">01</p>
                  <div className="title_line"></div>
                </div>
                <p className="title2_content public_title2">AI培训</p>
                <p className="text1_content public_text1">
                  实战课程：先进AI 客户模拟方案，还原真实销售实战场景
                  <br />
                  真实训练：7级AI情绪模拟，训练过程中动态变化，沉浸式培训体验
                  <br />
                  导师点评：优秀销售案例构建知识图谱;逐句AI点评分析,提供标准话术指导
                  <br />
                  高效&成本低：APP/PC随时练习，极大降低“导师1vs1”培训成本
                  <br />
                </p>
              </div>
              <div className="first_img"></div>
            </div>
            <div className="anchor" id="p2"></div>
            <div className="box_second">
              <div className="second_img"></div>
              <div className="box_text">
                <div className="title3_content">
                  <div className="title_line"></div>
                  <div className="title1_num public_title1">02</div>
                </div>
                <p className="title4_content public_title2">
                  保险行业知识化解决方案
                </p>
                <p className="text2_content public_text1">
                  智能投保解决方案：医疗知识图谱支撑轻量级保险投保预分析，有效降低从业人员医疗知识和投保要求理解成本
                  <br />
                  智能理赔解决方案：保险知识图谱支撑信息推理，有效提高从业人员业务反馈速度，提高客户满意度
                  <br />
                  智能产品解决方案：丰富全面保险知识智能管理系统，提高业务专业性，轻松获取客户信任
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="anchor" id="p3"></div>
            <div className="box_second">
              <div className="box_text">
                <div className="title1_content margin_top1">
                  <p className="title1_num public_title1">03</p>
                  <div className="title_line"></div>
                </div>
                <p className="title2_content public_title2">AI客服解决方案</p>
                <p className="text1_content public_text1">
                  多渠道入口：在线客服、人工客服、公众号、小程序、呼叫中心等多渠道统一管理和应对
                  <br />
                  客户画像：形成客户画像，根据客户画像优化回答策略，提供更优质更精准的回答
                  <br />
                  人机协同服务：NLP文本算法辅助，语义分析、问题分类，提高人工客服效率
                  <br />
                  自动应答机器人：基于知识图谱、意图理解的智能问答机器人
                  <br />
                </p>
              </div>
              <div className="third_img"></div>
            </div>
            <div className="anchor" id="p4"></div>
            <div className="box_second">
              <div className="fourth_img"></div>
              <div className="box_text">
                <div className="title3_content">
                  <div className="title_line"></div>
                  <div className="title1_num public_title1">04</div>
                </div>
                <p className="title4_content public_title2">E-HR解决方案</p>
                <p className="text2_content public_text1">
                  人力管理系统：知识图谱支撑的员工问题解答，一键直达式考勤、查询、申请等业务办理
                  <br />
                  人机协同服务：最大限度节约HR时间和精力，多入口对接，智能通知，智能推送，HR智能化办公
                  <br />
                  企业员工画像：基于企业数据分析的企业员工画像，最优质的员工服务与员工分析
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .main {
            padding-bottom: 70px;
          }
          .jishu {
            width: 100vw;
            height: 650px;
            background-image: url("./static/jishu-bg.png");
            background-position: center center;
            background-color: #000;
            overflow: hidden;
            font-family: siyuan-medium;
          }
          .title1 {
            width: 163px;
            height: 52px;
            font-size: 40px;
            color: rgba(255, 255, 255, 1);
            line-height: 56px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 233px;
          }
          .title2 {
            width: 130px;
            height: 37px;
            font-size: 26px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 37px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 18px;
          }
          .box_first {
            overflow: hidden;
            padding-top: 60px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .box_second {
            overflow: hidden;
            padding-top: 40px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .title1_content {
            display: flex;
            width: 100px;
            align-items: center;
          }
          .title1_num {
            width: 48px;
          }
          .title_line {
            width: 25px;
            height: 32px;
            box-sizing: border-box;
            border-bottom: 3px solid rgba(57, 120, 252, 1);
          }
          .text1_content {
            width: 100%;
            margin: 10px 0 0 0;
          }
          .text2_content {
            width: 100%;
            margin: 10px 0 0 0;
          }
          .title2_content {
            margin: 20px 0 0 0;
          }
          .title3_content {
            display: flex;
            flex-wrap: nowrap;
            width: 100px;
            align-items: center;
          }
          .title4_content {
            margin: 20px 0 0 0;
          }
          .first_img {
            width: 500px;
            height: 374px;
            background: url("./static/sales-manager-giving-advice-his-260nw-529008256.png")
              no-repeat;
            background-size: 100% 100%;
          }
          .second_img {
            width: 500px;
            height: 374px;
            background: url("./static/happy-senior-old-family-couple-260nw-1437231725.png")
              no-repeat;
            background-size: 100% 100%;
          }
          .third_img {
            width: 500px;
            height: 374px;
            background: url("./static/bigbigwork.png") no-repeat;
            background-size: 100% 100%;
          }
          .fourth_img {
            width: 500px;
            height: 374px;
            background: url("./static/a-man-discussing-a-business-plan-3773837.png")
              no-repeat;
            background-size: 100% 100%;
          }
          .box_text {
            width: 500px;
          }
          .public_title1 {
            height: 56px;
            font-size: 40px;
            color: rgba(51, 51, 51, 1);
            font-family: siyuan-medium;
            line-height: 56px;
          }
          .public_title2 {
            height: 25px;
            font-size: 18px;
            color: rgba(51, 51, 51, 1);
            font-family: siyuan-medium;
            line-height: 25px;
          }
          .public_text1 {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            line-height: 32px;
          }
        `}</style>
      </Layout>
    );
  }
}
export default Product;
