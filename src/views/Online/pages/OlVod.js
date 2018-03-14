import React from "react";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx"
import "./less/vod.less"
@inject("online")
@observer
class Vod extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.online;
  }

  componentDidMount() {
    const {params: {
      id
    }} = this.props.match;
    this.store.get_online_vod(id);
  }

  render() {
    const vodnow = toJS(this.store.vodnow);
    console.log(vodnow);
    if(!vodnow&&Object.keys(vodnow).length <=0){
      return <div></div>
    }
    return (
      <div className="ol-vod">
      <img src={vodnow.img} />
      {vodnow.name}{vodnow.id}
      </div>
    );
  }
}

export default Vod