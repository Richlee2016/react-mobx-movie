import React from "react";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom"
import {toJS} from "mobx"
import "./less/vod.less"
@inject("rootStore")
@observer
class Vod extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.rootStore.online;
  }

  componentDidMount() {
    const {params: {
      id
    }} = this.props.match;
    this.store.get_online_vod(id);
  }

  render() {
    const vodnow = toJS(this.store.vodnow);
    if(!vodnow || Object.keys(vodnow).length <=0){
      return <div></div>
    }
    const mapPlayUrl = vodnow.play.map((o,i) => {
      return (<div key={i}>
          <h3>{o.title}</h3>
          <div>
            {o.list.map(p => {
                return <Link key={p.href} to={`/online${p.href}`}>{p.title}</Link>
            })}
          </div>
        </div>)
    })
    return (
      <div className="ol-vod">
      <img src={vodnow.img} />
      {vodnow.name}{vodnow.id}
      {mapPlayUrl}
      </div>
    );
  }
}

export default Vod