import React from "react";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import OlTag from './components/OlTag'
@inject("online")
@observer
class Online extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.online;
  }

  componentDidMount() {
    this.store.get_online_home();
  }

  render() {
    const home = toJS(this.store.home);
    const {header,hot,movie,topic,tvplay,tvshow} = home;
    const reg = /\//g;
    let comTag;
    if(header){
      comTag = header.tag.map(o => {
        o.link = "classfy";
        o.type = o.href.replace(reg,"");
        return o;
      })
    }
    return (
      <div className="ol-home">
        <div className="ol-header">
          <div className="oh-banner"></div>
          <div className ="oh-menu">
            <ul>
              <li></li>
            </ul>
            {header?<OlTag tags={comTag} />:null}
          </div>
        </div>
      </div>
    );
  }
}

export default Online