import React from "react";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx"
import "./less/vod.less"

import Player from "../components/OlPlayer"

@inject("rootStore")
@observer
class Play extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.rootStore.online;
    this.state = {
        play:null
    }
  }

  componentDidMount() {
    const {params: {
      src
    }} = this.props.match;
    this.setState({
        play:src
    })
  }

  render() {
    const {play} = this.state;
    if(!play){
        return (<div></div>)
    };
    console.log(play);
    return (
      <div className="ol-play">
        <Player src={play} />
      </div>
    );
  }
}

export default Play