import React from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import  ReactPlayer from "react-player"
import "./home.less";
@inject("home")
@observer
class Special extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.home;
    this.state = {};
  }

  async componentDidMount(){
    await this.store.get_hot();
  }

  videoEnd(){
    this.store.set_play({type:"next"});
  }

  render() {
    const {hotplay,hotlist} = this.store;
    console.log(hotplay);
    if(!hotplay){
      return (<div></div>)
    }
    return (
      <div className="home-hot">
        <ReactPlayer 
        url={hotplay.videoKey || hotplay.video } 
        playing 
        controls
        width={"100%"}
        height={"100%"}
        onEnded={() => {this.videoEnd()}} />
      </div>
    );
  }
}

export default Special;
