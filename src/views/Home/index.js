import React from "react";
import "./home.less";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { Row, Col, Button } from "antd";
import { dropRightWhile, chain } from "lodash";
import Rvideo from "./Video";
import QueueAnim from 'rc-queue-anim';
@inject("home")
@observer
class Special extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.home;
    this.state = {
      show: false,
      videoId: "",
      page:1,
      pageClass: "",
      videoPlay:""
    };
  }

  async componentDidMount(){
    await this.store.GetHotMovie();
    const myHot = toJS(this.store.hotMovie);
    console.log(myHot);
    this.setState({
      videoId:myHot[0]._id,
      videoPlay:myHot[0].videoUrl
    })
  }

  trunMovie = id => {
    const {hotMovie} = this.store;
    if(this.state.num === id) return;
    const movie = hotMovie.find(o => o._id === id);
    this.setState({
      videoId: movie._id,
      page:1,
      show: true,
      pageClass:"",
      videoPlay:movie.videoUrl
    });
  };

  pageChange = num => {
    if(this.state.page === num) return;
    this.setState({
      page:num,
      pageClass:num === 1?"driveInLeft" : "driveInRight"
    })
  }

  createVideo(video){
    return {__html: `<object style="width:100%;height:100%;" autoactive="true" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="flashfirebug0" name="flashfirebug0"><param value=${video} name="movie"><param value="high" name="quality">
    <param value="true" name="allowFullScreen">
    <param value="false" name="menu">
    <param value="transparent" name="wmode"><param value="always" name="allowScriptAccess">
    <embed width="100%" height="100%" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src=${video} play="true" allowfullscreen="true" allowscriptaccess="always" wmode="transparent" id="flashfirebug0" name="flashfirebug0">
    </object>`}
  }

  render() {
    const {num,page,pageClass,videoPlay} = this.state;
    const { hotMovie } = this.store;
    const showClass = `mh-main vivify animationObject ${pageClass}`;

    const List = hotMovie.map((o, i) => {
      return (
        <div key={o._id} onClick={() => { this.trunMovie(o._id); }} >
        {o.name}
        </div>
      );
    });
    return (
      <div className="movie-home">
        <QueueAnim className="time-line" delay={2000} type={'left'} duration={2000} >
          {List}
        </QueueAnim>
        <div key={num} className="home-video vivify animationObject driveInBottom">
          <QueueAnim className="page-line" delay={2000} type={'scale'} duration={1000}>
            <button key="video" onClick={() => {this.pageChange(1)}}>熊猫预告</button>
            <button key="intor" onClick={() => {this.pageChange(2)}}>熊猫档案</button>
          </QueueAnim>
          <div key={page} className={showClass}>
            {videoPlay?<div className="my-video" dangerouslySetInnerHTML={this.createVideo(videoPlay)} />:null}
          </div>
          
        </div>
        {/* <video loop autoPlay>
          <source src="/static/videos/wm.mp4" type="video/mp4" />
        </video>*/}
      </div>
    );
  }
}

export default Special;
