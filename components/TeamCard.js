import React, { Component } from 'react';
class TeamCard extends Component {
  /* 换行 中间加"@$" */
  renderBr = text => {
    let result = text.split('@$');
    if (result) {
      return (
        <>
          {result.map((item, index) => {
            return (
              <p key={index}>
                {item}
                <br />
              </p>
            );
          })}
        </>
      );
    }

    return <>{text}</>;
  };
  render() {
    return (
      <div>
        <div className="card-hover card">
          <img className="portrait" src={this.props.portrait} alt="" />
          <div className="name public_text">
            <p>{this.props.name}</p>
          </div>
          <div className="professor public_text">
            <p>{this.props.professor}</p>
          </div>
          <div className="position">{this.renderBr(this.props.position)}</div>
        </div>
        <style jsx>{`
          .card {
            width: 366px;
            height: 371px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 4px 32px -4px rgba(0, 120, 226, 0.12);
            cursor: pointer;
            overflow: hidden;
          }
          .card:hover {
            box-shadow: 0px 4px 32px -4px rgba(0, 120, 226, 0.4);
          }
          .public_text {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-family: siyuan-medium; 
          }
          .portrait {
            width: 140px;
            height: 140px;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 46px;
          }
          .name {
            width: 100%;
            height: 22px;
            margin-top: 46px;
          }
          .professor {
            width: 100%;
            height: 22px;
            margin-top: 5px;
          }
          .position {
            width: 100%;
            height: 40px;
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            margin-left: 50%;
            transform: translateX(-50%);
            text-align: center;
            margin-top: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default TeamCard;
