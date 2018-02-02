import React from "react";
import "./home.less";
import QueueAnim from 'rc-queue-anim';
class Rvideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:1
    }
  }

  pageChange = num => {
    if(this.state.page === num) return;

  }

  render() {
    const {page} = this.state;
    // const showPage = page === 1? ()
    return (
      <div className="home-video vivify animationObject driveInBottom">
        <QueueAnim className="page-line" delay={2000} type={'scale'} duration={1000}>
          <button key="video" onClick={() => {this.pageChange(1)}}>熊猫预告</button>
          <button key="intor" onClick={() => {this.pageChange(2)}}>熊猫档案</button>
        </QueueAnim>
        <div className="video-main vivify animationObject driveInLeft">

        </div>
        <div className="intro-main vivify animationObject driveInRrigth">

        </div>
      </div>
    );
  }
}

export default Rvideo;
