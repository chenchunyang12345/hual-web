import React, { Component } from 'react';
class JoinCard extends Component {
  render() {
    return (
      <div>
        <div className="card-hover card">
          <div className="title_text1">
            <p>{this.props.text1}</p>
          </div>
          <img className="portrait" src={this.props.portrait} alt="" />
          <div className="title_text2">
            <p>{this.props.text2}</p>
          </div>
          <div className="button_into">
            <a href={this.props.url} target="_blank">
              {this.props.buttonName}
            </a>
          </div>
        </div>
        <style jsx>{`
          .card {
            width: 300px;
            height: 370px;
            background: linear-gradient(
              360deg,
              rgba(255, 255, 255, 0.25) 0%,
              rgba(73, 95, 230, 0.04) 100%
            );
            overflow: hidden;
            cursor: pointer;
          }
          .title_text1 {
            width: 100%;
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 25px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
            margin-top: 40px;
          }
          .title_text2 {
            width: 100%;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
            margin-top: 45px;
          }
          .portrait {
            width: 94px;
            height: 94px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 25px;
          }
          .button_into {
            width: 92px;
            height: 32px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 45px;
            border-radius: 3px;
            border: 1px solid rgba(85, 132, 255, 1);
            font-size: 14px;
            font-family: PingFang-SC-Regular, PingFang-SC;
            font-weight: 400;
            color: rgba(0, 67, 207, 1);
            line-height: 30px;
            text-align: center;
          }
          .button_into:hover {
            background: rgba(85, 132, 255, 1);
          }
          .button_into:hover a {
            color: rgba(255, 255, 255, 1);
          }
          .button_into a {
            display: block;
            width: 100%;
            height: 100%;
            color: rgba(57, 120, 252, 1);
          }
        `}</style>
      </div>
    );
  }
}

export default JoinCard;
