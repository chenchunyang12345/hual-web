const Item = ({ idx }) => (
  <div className={`item bg${idx}`}>
    <style jsx>{`
      .item {
        width: 167px;
        height: 54px;
      }
      .bg${idx} {
        background-image: url('./static/company/${idx}.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      /* 调整图片位置 */
      .bg1 {
        background-position: 10px 16px;
      }
      .bg2 {
        background-position: 16px 16px;
      }
      .bg3 {
        background-position: 25px 12px;
      }
      .bg4 {
        background-position: 18px 14px;
      }
      .bg5 {
        background-position: 12px 8px;
      }
      .bg6 {
        background-position: 40px 0px;
      }
      .bg7 {
        background-position: 26px 12px;
      }
      .bg8 {
        background-position: 30px 8px;
      }
      .bg9 {
        background-position: 24px 10px;
      }
      .bg10 {
        background-position: 0px 2px;
      }
      .bg11 {
        background-position: 16px 10px;
      }
      .bg12 {
        background-position: 10px 2px;
      }
    `}</style>
  </div>
);

const Partner = () => (
  <div className="partner">
    <div className="row">
      <Item idx={1} />
      <Item idx={2} />
      <Item idx={3} />
      <Item idx={4} />
    </div>
    <div className="row">
      <Item idx={5} />
      <Item idx={6} />
      <Item idx={7} />
      <Item idx={8} />
    </div>
    <div className="row">
      <Item idx={9} />
      <Item idx={10} />
      <Item idx={11} />
      <Item idx={12} />
    </div>
    <style jsx>{`
      .partner {
        width: 100%;
      }
      .partner .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
      }
      .partner .row:nth-last-child(1) {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default Partner;
